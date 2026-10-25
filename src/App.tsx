import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Portfolio from './components/Portfolio'
import LadyUmbrella from "./components/projetcs/LadyUmbrella";
import Footer from './components/Footer'


function Home() {

  useEffect(() => {
      const id = sessionStorage.getItem("targetSection");

      if (!id) return;

      sessionStorage.removeItem("targetSection");

      const scrollToSection = () => {
          const element = document.getElementById(id);

          if (element) {
              element.scrollIntoView({
                  behavior: "instant",
                  block: "start"
              });
          }
      };

      if (document.readyState === "complete") {
          setTimeout(scrollToSection, 100);
      } else {
          window.addEventListener("load", scrollToSection, { once: true });
      }

      return () => {
          window.removeEventListener("load", scrollToSection);
      };
  }, []);

  return (
    <div className="app">
      <Navbar />
      <About />
      <Portfolio />
      <Footer />
    </div>
  )
}

function App() {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/portfolio/lady-umbrella"
                    element={<LadyUmbrella />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App