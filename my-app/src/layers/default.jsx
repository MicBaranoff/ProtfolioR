import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';

function DefaultLayer({ children }) {
  return (
    <div className="default-layer">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default DefaultLayer;
