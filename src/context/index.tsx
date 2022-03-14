import github from '../apis/index';
import React, { ReactNode } from 'react';
import { useRef, useState } from 'react';
import { buildQuery, year } from '../helpers';

interface ContextProps {
  children: ReactNode;
}

interface ContextTypes {
  users: { login: string; avatar_url: string }[];
  loading: boolean;
  searchInput: React.RefObject<HTMLInputElement>;
  error: string;
  year: number;
  clearHandler: () => void;
  submitHandler: () => void;
}
const Context = React.createContext<ContextTypes>(undefined!);

export function ContextProvider({ children }: ContextProps): JSX.Element {
  // prettier-ignore
  const [users, setUsers] = useState<{ login: string; avatar_url: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const searchInput = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string>('');

  const clearHandler = () => setUsers([]);

  const submitHandler = async () => {
    if (!searchInput.current || !searchInput.current.value) {
      setUsers([]);
      setError('Cannot search for empty text ): ');
      return;
    }

    setError('');

    const q = searchInput.current.value;
    searchInput.current.value = '';

    setLoading(true);

    const { data } = await github.get(buildQuery(q));
    data.items.length > 0
      ? setUsers(data.items)
      : setError('No Users Found ):');

    setLoading(false);
  };

  return (
    <Context.Provider
      value={{
        users,
        loading,
        searchInput,
        error,
        year,
        clearHandler,
        submitHandler,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
