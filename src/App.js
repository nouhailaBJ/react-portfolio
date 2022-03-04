import "./App.scss";
import Navbar from "./components/Navbar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import { Route, Routes } from "react-router-dom";
import MySkills from "./Pages/MySkills";
import MyWorks from "./Pages/MyWorks";
import Contact from "./Pages/ContactPage";
import MyEducation from "./Pages/MyEducation";
import { useState, useEffect } from "react";
import { MdMenu } from "react-icons/md";

function App() {
  const [navToggle, setNavToggle] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const toggleNav = () => {
    setNavToggle(!navToggle);
  };
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  return (
    <div className="App">
      {(navToggle || screenWidth > 768) && (
        <div className="sidebar nav-toggle">
          <Navbar />
        </div>
      )}

      <div className="main-content">
        <div className="content">
          <div className="ham-burger-menu">
            <button class="btn" onClick={toggleNav}>
              <MdMenu />
            </button>
          </div>
          <Routes>
            <Route path="/" exact="true" element={<HomePage />} />
            <Route path="/about" exact="true" element={<AboutPage />} />
            <Route path="/my-skills" exact="true" element={<MySkills />} />
            <Route
              path="/my-educations"
              exact="true"
              element={<MyEducation />}
            />
            <Route path="/my-works" exact="true" element={<MyWorks />} />
            <Route path="/contact" exact="true" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
