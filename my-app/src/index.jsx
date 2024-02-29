import ReactDOM from 'react-dom/client';
import './assets/styles/index.scss';
import { BrowserRouter as Router } from 'react-router-dom';

import Locomotive from 'components/overlays/Locomotive';
import App from 'components/overlays/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Locomotive>
      <App />
    </Locomotive>
  </Router>,
);
