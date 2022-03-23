import { color } from '../helpers';

function RepoSkewedBadge(): JSX.Element {
  return (
    <div
      className="repo__skewedBadge"
      style={{
        backgroundColor: color(),
      }}
    >
      Repo
    </div>
  );
}

export default RepoSkewedBadge;
