import Context from '../context';
import AccountDetails from './AccountDetails';
import Spinner from './Spinner';
import UserDetails from './UserDetails';
import UserRepos from './UserRepos';
import { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function UserProfile(): JSX.Element {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { getUser, user, userRepos, userLoading } = useContext(Context);

  useEffect(() => {
    if (!state) navigate('/notfound');
  }, [state, navigate]);

  useEffect(() => getUser(state as string), []);

  return (
    <div className="userProfile">
      {userLoading && <Spinner />}
      {!userLoading && user && <UserDetails />}
      {!userLoading && user && <AccountDetails />}
      {!userLoading && userRepos && <UserRepos />}
    </div>
  );
}

export default UserProfile;
