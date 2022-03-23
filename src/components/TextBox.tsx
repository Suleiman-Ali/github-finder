interface TextBoxProps {
  label: string;
  text: string;
}

function TextBox({ label, text }: TextBoxProps): JSX.Element {
  return (
    <div className="userDetails__rightLinkBox">
      <p className="userDetails__rightLabel">{label}</p>
      <p className="userDetails__rightLinkButton">{text}</p>
    </div>
  );
}

export default TextBox;
