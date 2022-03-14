import { useContext } from 'react';
import Context from '../context';
import User from './User';

function Users(): JSX.Element {
  const { users } = useContext(Context);

  return (
    <div className="users">
      {users.map((user) => (
        <User user={user} key={user.login} />
      ))}
    </div>
  );
}

export default Users;
