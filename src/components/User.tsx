interface UserProps {
  user: { login: string; avatar_url: string };
}

function User({ user }: UserProps): JSX.Element {
  return (
    <div className="user">
      <div className="user__avatarBox">
        <img className="user__avatar" src={user.avatar_url} alt="avatar" />
      </div>

      <div className="user__textBox">
        <p className="user__heading">{user.login}</p>
        <p className="user__message">Visit Profile</p>
      </div>
    </div>
  );
}

export default User;
