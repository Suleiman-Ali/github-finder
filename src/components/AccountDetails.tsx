import Context from '../context';
import AccountDetailsBox from './AccountDetailsBox';
import { useContext } from 'react';

function AccountDetails(): JSX.Element | null {
  const { user } = useContext(Context);

  if (!user) return null;

  return (
    <div className="accountDetails">
      <AccountDetailsBox
        text="Followers"
        number={user.followers}
        icon="fa-users"
      />

      <AccountDetailsBox
        text="Following"
        number={user.following}
        icon="fa-user-group"
      />

      <AccountDetailsBox
        text="Repos"
        number={user.public_repos}
        icon="fa-box"
      />

      <AccountDetailsBox
        text="Gists"
        number={user.public_gists}
        icon="fa-boxes-stacked"
      />
    </div>
  );
}

export default AccountDetails;
