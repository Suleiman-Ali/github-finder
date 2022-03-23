import Context from '../context';
import UserRepo from './UserRepo';
import { useContext } from 'react';

function UserRepos(): JSX.Element {
  const { userRepos } = useContext(Context);

  return (
    <div className="repos">
      {userRepos.map((repo, index) => (
        <UserRepo repo={repo} key={index} />
      ))}
    </div>
  );
}

export default UserRepos;
