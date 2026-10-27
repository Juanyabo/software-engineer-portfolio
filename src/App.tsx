import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from "react-router-dom";
import { useEffect } from "react";
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Portfolio from './components/Portfolio'
import OnshindoOsaka from './components/projetcs/OnshindoOsaka'
import LadyUmbrella from "./components/projetcs/LadyUmbrella";
import RPGMechanics from "./components/projetcs/RPGMechanics"
import Thesis from "./components/projetcs/Thesis";
import Footer from './components/Footer'

function ScrollToTop() {
    const { pathname } = useLocation();
    const navigationType = useNavigationType();

    useEffect(() => {
        if (navigationType === "POP") return;

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
    }, [pathname, navigationType]);

    return null;
}

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
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/portfolio/lady-umbrella"
                    element={<LadyUmbrella />}
                />
                <Route path="/portfolio/onshindo-osaka-spatial4" element={<OnshindoOsaka />} />
                <Route path="/portfolio/rpg-mechanics" element={<RPGMechanics />} />
                <Route path="/portfolio/thesis" element={<Thesis />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App