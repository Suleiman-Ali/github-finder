import { year } from '../helpers';

function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <i className="fa-solid fa-bookmark footer__icon"></i>
      <p className="footer__text">
        Copyright &copy; {year} All Rights Reversed
      </p>
    </footer>
  );
}

export default Footer;
