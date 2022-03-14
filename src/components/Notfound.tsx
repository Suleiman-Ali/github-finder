import Button from './Button';
import { Link } from 'react-router-dom';

function Notfound(): JSX.Element {
  return (
    <div className="notfound">
      <h1 className="notfound__heading">Ouch!</h1>
      <p className="notfound__message">404 Error, Page not found!</p>
      <Link to={'/'}>
        <Button text="Back to Home" cls="notfound__button" />
      </Link>
    </div>
  );
}

export default Notfound;
