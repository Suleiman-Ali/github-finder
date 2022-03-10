import Navbar from './Navbar';

function App(): JSX.Element {
  const now = new Date().getFullYear();

  return (
    <div className="app">
      <Navbar />

      <div className="home">
        <div className="search">
          <input type="text" className="search__input" placeholder="Search" />
          <button className="search__button">Search</button>
        </div>

        <footer className="footer">
          <i className="fa-solid fa-bookmark footer__icon"></i>
          <p className="footer__text">
            Copyright &copy; {now} All Rights Reversed
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
