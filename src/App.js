import './App.css';
import './PR-Bootstrap/assets/css/style.css'
import Header from './PR-Bootstrap/Components/Header';
import MainBanner from './PR-Bootstrap/Components/MainBanner';
import About from './PR-Bootstrap/Components/About';
import US from './PR-Bootstrap/Components/US';
import Menu from './PR-Bootstrap/Components/Menu';
import Events from './PR-Bootstrap/Components/Events';
import Booking from './PR-Bootstrap/Components/Booking';
import Testimonial from './PR-Bootstrap/Components/Testimonial';
import Gallery from './PR-Bootstrap/Components/Gallery';
import Chefs from './PR-Bootstrap/Components/Chefs';
import Contact from './PR-Bootstrap/Components/Contact';
import Footer from './PR-Bootstrap/Components/Footer';



function App() {
  return (
    <>
      <Header />
      <MainBanner />
      <About />
      <US />
      <Menu />
      <Events />
      <Booking />
      <Testimonial />
      <Gallery />
      <Chefs />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
