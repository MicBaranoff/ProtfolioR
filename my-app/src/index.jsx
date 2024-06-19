import ReactDOM from 'react-dom/client';
import './assets/styles/index.scss';
import { BrowserRouter as Router } from 'react-router-dom';

import App from 'components/overlays/App';
import LenisScroll from 'components/overlays/LenisScroll';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <LenisScroll>
      <App />
    </LenisScroll>
  </Router>,
);
