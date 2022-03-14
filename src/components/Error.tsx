interface ErrorProps {
  cls: string;
  text: string;
}

function Error({ cls, text }: ErrorProps): JSX.Element {
  return <p className={cls}>{text}</p>;
}

export default Error;
