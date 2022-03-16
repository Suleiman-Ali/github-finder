import github from '../apis/index';
import React, { ReactNode } from 'react';
import { useRef, useState } from 'react';
import { buildQuery, year, Users, User, Voidy, Repos } from '../helpers';

interface ContextProps {
  children: ReactNode;
}

interface ContextTypes {
  users: Users;
  userRepos: Repos;
  user: User | undefined;
  loading: boolean;
  error: string;
  year: number;
  userLoading: boolean;
  searchInput: React.RefObject<HTMLInputElement>;
  clearHandler: Voidy;
  submitHandler: Voidy;
  getUser: (login: string) => void;
}
const Context = React.createContext<ContextTypes>(undefined!);

export function ContextProvider({ children }: ContextProps): JSX.Element {
  // prettier-ignore
  const [users, setUsers] = useState<Users>([]);
  const [user, setUser] = useState<User | undefined>(undefined);
  const [userRepos, setUserRepos] = useState<Repos>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [userLoading, setUserLoading] = useState<boolean>(false);
  const searchInput = useRef<HTMLInputElement>(null);

  const getUser = async (login: string) => {
    setUserLoading(true);

    const { data: user } = await github.get(`/users/${login}`);
    const { data: repos } = await github.get(`/users/${login}/repos`);

    setUser(user);
    setUserRepos(repos);

    setUserLoading(false);
  };

  const clearHandler = () => {
    setUsers([]);
    if (searchInput.current && searchInput.current.value)
      searchInput.current.value = '';
  };

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
    if (data.items.length > 0) setUsers(data.items);
    else {
      setUsers([]);
      setError('No Users Found ):');
    }

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
        user,
        userRepos,
        userLoading,
        getUser,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
