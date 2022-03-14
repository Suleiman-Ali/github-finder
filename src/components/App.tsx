import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import { ContextProvider } from '../context';
import { Routes, Route } from 'react-router-dom';
import Notfound from './Notfound';

function App(): JSX.Element {
  return (
    <ContextProvider>
      <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notfound" element={<Notfound />} />
          <Route path="*" element={<Notfound />} />
        </Routes>

        <Footer />
      </div>
    </ContextProvider>
  );
}

export default App;

// TODO Context
// TODO ROUTING
// TODO USER PAGE
// TODO NotFound Page
// TODO REFACTOR
