import { Link } from 'react-router-dom';

function Navbar(): JSX.Element {
  return (
    <nav className="nav">
      <Link to={'/'} className="i">
        <div className="logo">
          <i className="fa-brands fa-github-square logo__icon"></i>
          <p className="logo__text">Github Finder</p>
        </div>
      </Link>

      <div className="pages">
        <Link className="pages__text active" to={'/'}>
          Home
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
