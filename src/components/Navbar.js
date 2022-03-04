import React from "react";
import { NavLink } from "react-router-dom";
import avatar from "../img/medium_nbjaghou.jpg";
import {
  MdAddTask,
  MdHomeFilled,
  MdMessage,
  MdOutlineTagFaces,
  MdSchool,
  MdWork,
  MdWorkspacesFilled,
} from "react-icons/md";

function Navbar() {
  return (
    <div className="NavBar">
      <nav className="nav">
        <div className="profile">
          <img src={avatar} alt="" />
          <h3>Nouhaila Bjaghou</h3>
          <p>Full Stack Dev</p>
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" exact="true">
              <MdHomeFilled /> Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" exact="true">
              <MdOutlineTagFaces /> About Me
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/my-skills" exact="true">
              <MdWorkspacesFilled /> My Skills
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/my-educations" exact="true">
              <MdSchool /> My Edu / Experience
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/my-works" exact="true">
              <MdWork />
              My Works
            </NavLink>
          </li>
          <li className="nav-item">
            <a
              href="https://www.linkedin.com/in/nouhaila-bjaghou-245406200/"
              target="_blank"
            >
              <MdAddTask /> Hire Me
            </a>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" exact="true">
              <MdMessage /> Contact Me
            </NavLink>
          </li>
        </ul>
        <footer className="footer">
          <p>&copy; 2022 all right is reserved</p>
        </footer>
      </nav>
    </div>
  );
}

export default Navbar;
