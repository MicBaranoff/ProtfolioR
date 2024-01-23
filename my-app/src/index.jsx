import ReactDOM from 'react-dom/client';
import './assets/styles/index.scss';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import Locomotive from 'components/overlays/Locomotive';
import AnimatedRoutes from 'components/overlays/AnimatedRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Locomotive>
      <Header />
      <AnimatedRoutes />
      <Footer />
    </Locomotive>
  </Router>,
);
