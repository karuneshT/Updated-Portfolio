import './App.css';

//Importing Components
import IntroHeader from './Components/IntroHeader/IntroHeader';
import About from './Components/AboutMe';
import Services from './Components/Services';
// import Portfolio from './Components/Portfolio/Portfolio';
import Experience from './Components/Experience';
import Hire from './Components/Hire';
import ContactMe from './Components/ContactMe';
import Footer from './Components/Footer';

function App() {

  return (
    <div className="App">
      <IntroHeader />
      <About />
      <Services />
      <Experience />
      <Hire />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
