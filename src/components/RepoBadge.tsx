interface RepoBadgeProps {
  text: string | number;
}

function RepoBadge({ text }: RepoBadgeProps): JSX.Element {
  return (
    <div className="repo__badge">
      <i className="fa-solid fa-star"></i>
      {text}
    </div>
  );
}

export default RepoBadge;
