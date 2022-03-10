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
      </div>
    </div>
  );
}

export default App;
