import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ThemeProvider from "./context/ThemeProvider";
import PageTransition from "./components/PageTransition";
import "./App.css";

export default function App() {
  const location = useLocation();

  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><section id="about"><About /></section></PageTransition>} />
            <Route path="/skills" element={<PageTransition><section id="skills"><Skills /></section></PageTransition>} />
            <Route path="/projects" element={<PageTransition><section id="projects"><Projects /></section></PageTransition>} />
            <Route path="/contact" element={<PageTransition><section id="contact"><Contact /></section></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
    </ThemeProvider>
  );
}
