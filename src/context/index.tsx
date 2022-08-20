import github from '../apis/index';
import { createContext, FormEvent, ReactNode, useRef, useState } from 'react';
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
  submitHandler: (e: FormEvent) => Promise<void>;
  getUser: (login: string) => void;
}
const Context = createContext<ContextTypes>(undefined!);

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
    const allData = await Promise.all([
      github.get(`/users/${login}`),
      github.get(`/users/${login}/repos`),
    ]);
    setUser(allData[0].data);
    setUserRepos(allData[1].data);
    setUserLoading(false);
  };

  const clearHandler = () => {
    setUsers([]);
    if (searchInput.current && searchInput.current.value)
      searchInput.current.value = '';
  };

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

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
