import { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Context from '../context';
import { color } from '../helpers';
import Spinner from './Spinner';

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
      {!userLoading && user && (
        <div className="userDetails">
          <div className="userDetails__left">
            <img
              className="userDetails__leftImg"
              src={user.avatar_url}
              alt="avatar"
            />
            <p className="userDetails__leftName">{user.name}</p>
            <p className="userDetails__leftLogin">{user.login}</p>
          </div>

          <div className="userDetails__right">
            <div className="userDetails__rightBox">
              <p className="userDetails__rightName">{user.name}</p>
              {user.type && (
                <p className="userDetails__rightType">{user.type}</p>
              )}

              {user.hireable && (
                <p className="userDetails__rightHire">
                  {user.hireable === true ? 'Hireable' : ''}
                </p>
              )}
            </div>

            <div className="userDetails__rightBox">
              <p className="userDetails__rightBio">{user.bio}</p>
            </div>

            <div className="userDetails__rightBox">
              <button
                className="userDetails__rightButton"
                onClick={() => navigate('/')}
              >
                Back Home
              </button>

              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="userDetails__rightButton"
              >
                Github Profile
              </a>
            </div>

            <div className="userDetails__rightLinksBox">
              {user.location && (
                <div className="userDetails__rightLinkBox">
                  <p className="userDetails__rightLabel">Location</p>
                  <p className="userDetails__rightLinkButton">
                    {user.location}
                  </p>
                </div>
              )}

              {user.blog && (
                <div className="userDetails__rightLinkBox">
                  <p className="userDetails__rightLabel">Website</p>
                  <a
                    className="userDetails__rightLinkButton"
                    href={user.blog}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    {user.blog}
                  </a>
                </div>
              )}

              {user.twitter_username && (
                <div className="userDetails__rightLinkBox">
                  <p className="userDetails__rightLabel">Twitter</p>
                  <a
                    className="userDetails__rightLinkButton"
                    href={`https://twitter.com/${user.twitter_username}`}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    {user.twitter_username}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {!userLoading && user && (
        <div className="accountDetails">
          <div className="accountDetails__box">
            <div className="accountDetails__textBox">
              <p className="accountDetails__text">Followers</p>
              <p className="accountDetails__number">{user.followers}</p>
            </div>
            <i className="fa-solid fa-users accountDetails__icon"></i>
          </div>

          <div className="accountDetails__box">
            <div className="accountDetails__textBox">
              <p className="accountDetails__text">Following</p>
              <p className="accountDetails__number">{user.following}</p>
            </div>
            <i className="fa-solid fa-user-group accountDetails__icon"></i>
          </div>

          <div className="accountDetails__box">
            <div className="accountDetails__textBox">
              <p className="accountDetails__text">Repos</p>
              <p className="accountDetails__number">{user.public_repos}</p>
            </div>
            <i className="fa-solid fa-box accountDetails__icon"></i>
          </div>

          <div className="accountDetails__box">
            <div className="accountDetails__textBox">
              <p className="accountDetails__text">Gists</p>
              <p className="accountDetails__number">{user.public_gists}</p>
            </div>
            <i className="fa-solid fa-boxes-stacked accountDetails__icon"></i>
          </div>
        </div>
      )}

      {!userLoading && userRepos && (
        <div className="repos">
          {userRepos.map((repo) => (
            <div className="repo" key={repo.name}>
              <div
                className="repo__skewedBadge"
                style={{
                  backgroundColor: color(),
                }}
              >
                Repo
              </div>
              <div className="repo__box">
                <i className="fa-solid fa-link repo__icon"></i>
                <a href={repo.html_url} className="repo__name">
                  {repo.name}
                </a>
              </div>

              <div className="repo__box">
                <p className="repo__description">{repo.description}</p>
              </div>

              <div className="repo__box">
                <div className="repo__badge">
                  <i className="fa-solid fa-eye"></i>
                  {repo.watchers_count}
                </div>

                <div className="repo__badge">
                  <i className="fa-solid fa-star"></i>
                  {repo.stargazers_count}
                </div>

                <div className="repo__badge">
                  <i className="fa-solid fa-info"></i>
                  {repo.open_issues}
                </div>

                <div className="repo__badge">
                  <i className="fa-solid fa-utensils"></i>
                  {repo.forks}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserProfile;
