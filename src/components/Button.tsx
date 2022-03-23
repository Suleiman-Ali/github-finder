interface ButtonProps {
  text: string;
  cls: string;
  type?: 'submit' | 'button';
  onClick?: () => void;
}
function Button({ text, cls, onClick, type }: ButtonProps): JSX.Element {
  return (
    <button className={cls} onClick={onClick} type={type}>
      {text}
    </button>
  );
}

export default Button;
