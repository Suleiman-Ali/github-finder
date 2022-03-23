interface AccountDetailsBoxProps {
  text: string;
  number: number;
  icon: string;
}

function AccountDetailsBox({
  text,
  number,
  icon,
}: AccountDetailsBoxProps): JSX.Element {
  return (
    <div className="accountDetails__box">
      <div className="accountDetails__textBox">
        <p className="accountDetails__text">{text}</p>
        <p className="accountDetails__number">{number}</p>
      </div>
      <i className={`fa-solid ${icon} accountDetails__icon`}></i>
    </div>
  );
}

export default AccountDetailsBox;
