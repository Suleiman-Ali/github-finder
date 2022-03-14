interface ButtonProps {
  text: string;
  cls: string;
  onClick?: () => void;
}
function Button({ text, cls, onClick }: ButtonProps): JSX.Element {
  return (
    <button className={cls} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
