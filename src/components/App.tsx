import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import Notfound from './Notfound';
import UserProfile from './UserProfile';
import { Routes, Route } from 'react-router-dom';
import { ContextProvider } from '../context';

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
