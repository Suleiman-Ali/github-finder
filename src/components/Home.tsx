import Context from '../context';
import Search from './Search';
import Spinner from './Spinner';
import Error from './Error';
import Users from './Users';
import { useContext } from 'react';

function Home(): JSX.Element {
  const { users, loading, error } = useContext(Context);

  return (
    <div className="home">
      <Search />
      {loading && <Spinner />}
      {!loading && users.length > 0 && <Users />}
      {error && <Error cls="error" text={error} />}
    </div>
  );
}

export default Home;
