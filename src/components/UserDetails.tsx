import UserDetailsLeft from './UserDetailsLeft';
import UserDetailsRight from './UserDetailsRight';

function UserDetails(): JSX.Element {
  return (
    <div className="userDetails">
      <UserDetailsLeft />
      <UserDetailsRight />
    </div>
  );
}

export default UserDetails;
