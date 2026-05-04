import Intro from "./components/Intro";
import './components/styles/intro.css';
import About from "./components/About";
import './components/styles/about.css';
import Portfolio from "./components/Portfolio";
import './components/styles/portfolio.css';
// import Contact from "./components/Contact";
import './components/styles/contact.css';
import Footer from "./components/Footer";
import './components/styles/footer.css';
import Sidebar from "./components/Sidebar";
import './components/styles/sidebar.css';
import './components/LoadingScreen';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './components/styles/styles.css'
import LoadingScreen from "./components/LoadingScreen";

function App() {
  return (
    <>
      <Sidebar/>
      <LoadingScreen />
      <BrowserRouter basename="/queviquev.github.io">      
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio/>} />
          {/* <Route path="/contact" element={<Contact/>} /> */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App
