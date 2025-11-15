import About from './components/about';
import BannerImage from './components/bannerImage';
import Contact from './components/contact';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';
import Testimonial from './components/testimonial';
import Work from './components/work';

function App() {

  return (
    <>
      <BannerImage />
      <Header />
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  )
}

export default App
