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
    <div className='relative overflow-x-hidden'>
      <BannerImage />
      <Header />
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
