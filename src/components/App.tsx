import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import Notfound from './Notfound';
import { ContextProvider } from '../context';
import { Routes, Route } from 'react-router-dom';
import UserProfile from './UserProfile';

function App(): JSX.Element {
  return (
    <ContextProvider>
      <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:login" element={<UserProfile />} />
          <Route path="/notfound" element={<Notfound />} />
          <Route path="*" element={<Notfound />} />
        </Routes>

        <Footer />
      </div>
    </ContextProvider>
  );
}

export default App;

// TODO REFACTOR
// TODO TEST
