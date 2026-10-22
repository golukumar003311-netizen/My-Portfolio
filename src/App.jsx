import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Education from './pages/Education.jsx';
import Experience from './pages/Experience.jsx';
import Skills from './pages/Skills.jsx';
import Services from './pages/Services.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return <><Header /><main><Home /><About /><Education /><Experience /><Skills /><Services /><Portfolio /><Contact /></main><Footer /></>;
}

export default App;
