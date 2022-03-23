import Context from '../context';
import { useContext } from 'react';

function UserDetailsLeft(): JSX.Element | null {
  const { user } = useContext(Context);

  if (!user) return null;

  return (
    <div className="userDetails__left">
      <img
        className="userDetails__leftImg"
        src={user.avatar_url}
        alt="avatar"
      />
      <p className="userDetails__leftName">{user.name}</p>
      <p className="userDetails__leftLogin">{user.login}</p>
    </div>
  );
}

export default UserDetailsLeft;
