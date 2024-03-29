import { render } from 'react-dom';
import App from './components/App';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.scss';

render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
