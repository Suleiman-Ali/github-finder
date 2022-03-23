import RepoBadge from './RepoBadge';
import RepoHeading from './RepoHeading';
import RepoSkewedBadge from './RepoSkewedBadge';
import RepoDescription from './RepoDescription';
import { Repo } from '../helpers';

interface UserRepoProps {
  repo: Repo;
}

function UserRepo({ repo }: UserRepoProps): JSX.Element {
  return (
    <div className="repo">
      <RepoSkewedBadge />
      <RepoHeading href={repo.html_url} name={repo.name} />
      <RepoDescription description={repo.description} />
      <div className="repo__box">
        <RepoBadge text={repo.watchers_count} />
        <RepoBadge text={repo.stargazers_count} />
        <RepoBadge text={repo.open_issues} />
        <RepoBadge text={repo.forks} />
      </div>
    </div>
  );
}

export default UserRepo;
