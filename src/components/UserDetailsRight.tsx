import Context from '../context';
import LinkBox from './LinkBox';
import TextBox from './TextBox';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

function UserDetailsRight(): JSX.Element | null {
  const { user } = useContext(Context);

  if (!user) return null;

  return (
    <div className="userDetails__right">
      <div className="userDetails__rightBox">
        <p className="userDetails__rightName">{user.name}</p>

        {user.type && <p className="userDetails__rightType">{user.type}</p>}

        {user.hireable && (
          <p className="userDetails__rightHire">
            {user.hireable === true ? 'Hireable' : 'Working'}
          </p>
        )}
      </div>

      <div className="userDetails__rightBox">
        <p className="userDetails__rightBio">{user.bio}</p>
      </div>

      <div className="userDetails__rightBox">
        <Link to={'/'} className="userDetails__rightButton">
          Back Home
        </Link>

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
        {user.location && <TextBox label="Location" text={user.location} />}

        {user.blog && (
          <LinkBox
            label="Website"
            href={
              user.blog.includes('http') ? user.blog : `https://${user.blog}`
            }
            text={user.blog}
          />
        )}

        {user.twitter_username && (
          <LinkBox
            label="Twitter"
            href={`https://twitter.com/${user.twitter_username}`}
            text={user.twitter_username}
          />
        )}
      </div>
    </div>
  );
}

export default UserDetailsRight;
