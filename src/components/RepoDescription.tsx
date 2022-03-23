interface RepoDescriptionProps {
  description: string;
}

function RepoDescription({ description }: RepoDescriptionProps): JSX.Element {
  return (
    <div className="repo__box">
      <p className="repo__description">{description}</p>
    </div>
  );
}

export default RepoDescription;
