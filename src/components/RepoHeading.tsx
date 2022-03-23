interface RepoHeadingProps {
  href: string;
  name: string;
}

function RepoHeading({ href, name }: RepoHeadingProps): JSX.Element {
  return (
    <div className="repo__box">
      <i className="fa-solid fa-link repo__icon"></i>
      <a href={href} className="repo__name">
        {name}
      </a>
    </div>
  );
}

export default RepoHeading;
