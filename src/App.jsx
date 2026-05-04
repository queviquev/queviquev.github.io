import Intro from "./components/Intro";
import './components/styles/intro.css';
import About from "./components/About";
import './components/styles/about.css';
import Portfolio from "./components/Portfolio";
import './components/styles/portfolio.css';
import './components/styles/contact.css';
import Footer from "./components/Footer";
import './components/styles/footer.css';
import Sidebar from "./components/Sidebar";
import './components/styles/sidebar.css';
import './components/LoadingScreen';
import './components/styles/styles.css'
import LoadingScreen from "./components/LoadingScreen";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Sidebar/>
        <LoadingScreen />      
        <Routes>
          <Route path="/" element={<Intro/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App
