import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import { ContextProvider } from '../context';
import { Routes, Route } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <ContextProvider>
      <div className="app">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Footer />
              </>
            }
          />
        </Routes>
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
