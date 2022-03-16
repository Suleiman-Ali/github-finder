import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context';
import User from './User';

function Users(): JSX.Element {
  const { users } = useContext(Context);

  return (
    <div className="users">
      {users.map((user) => (
        <Link to={`/users/${user.login}`} key={user.login} state={user.login}>
          <User user={user} key={user.login} />
        </Link>
      ))}
    </div>
  );
}

export default Users;
