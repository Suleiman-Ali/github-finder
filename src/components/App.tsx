import { useRef, useState } from 'react';
import Navbar from './Navbar';
import github from '../apis/index';

const buildQuery = (txt: string | undefined): string =>
  `/search/users?q=${txt}`;
const buildReposQuery = (txt: string): string => `/users/${txt}/repos`;
const now = new Date().getFullYear();

function App(): JSX.Element {
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
    <div className="app">
      <Navbar />

      <div className="home">
        <div className="search">
          <input
            type="text"
            className="search__input"
            placeholder="Search"
            ref={searchInput}
          />
          <button className="search__button" onClick={submitHandler}>
            Search
          </button>
          {users.length > 0 ? (
            <button className="search__clear" onClick={clearHandler}>
              CL
            </button>
          ) : null}
        </div>
        {loading && <div className="lds-hourglass"></div>}
        {!loading && users.length > 0 && (
          <div className="users">
            {users.map((user) => (
              <div className="user" key={user.login}>
                <div className="user__avatarBox">
                  <img
                    className="user__avatar"
                    src={user.avatar_url}
                    alt="avatar"
                  />
                </div>

                <div className="user__textBox">
                  <p className="user__heading">{user.login}</p>
                  <p className="user__message">Visit Profile</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {error && <p className="error">{error}</p>}
      </div>
      <footer className="footer">
        <i className="fa-solid fa-bookmark footer__icon"></i>
        <p className="footer__text">
          Copyright &copy; {now} All Rights Reversed
        </p>
      </footer>
    </div>
  );
}

export default App;
