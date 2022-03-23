interface LinkBoxProps {
  label: string;
  href: string;
  text: string;
}

function LinkBox({ label, href, text }: LinkBoxProps): JSX.Element {
  return (
    <div className="userDetails__rightLinkBox">
      <p className="userDetails__rightLabel">{label}</p>
      <a
        className="userDetails__rightLinkButton"
        href={href}
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: 'underline' }}
      >
        {text}
      </a>
    </div>
  );
}

export default LinkBox;
