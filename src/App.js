import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Qualifications from './Components/Qualifications/Qualifications';
import Scrollup from './Components/Scrollup/Scrollup';
import Services from './Components/Services/Services';
import Skills from './Components/Skills/Skills';
import Work from './Components/Work/Work';

function App() {
  return (
    <div>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualifications/>
        <Work/>
        <Contact />
      </main>
      <Footer/>
      <Scrollup />
    </div>
  );
}

export default App;
