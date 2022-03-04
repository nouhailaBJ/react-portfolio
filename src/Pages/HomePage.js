import React from "react";
import Typical from "react-typical";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hii, I am
          <Typical
            steps={[
              " Nouhaila Bjaghou",
              1000,
              " Vuejs && Laravel Lover",
              1000,
              " Full Stack devlopper",
              1000,
              " Mern Full Stack",
              1000,
            ]}
            loop={Infinity}
            wrapper="span"
          />
          <p className="h-sub-text">
            I am currently a student of the computer engineering at 1337, And
            full-stack Web developer with 5 years of experience
          </p>
          <div class="btn-home">
            <a href="/nouhailaBjaghou.pdf" className="btn" target="_blank">
              Download CV
            </a>
          </div>
          <div className="icons">
            <a
              href="https://www.facebook.com/nouhaila.bj.9/"
              className="icon-holder"
              target="_blank"
            >
              <FaFacebook className="icon fb" />
            </a>
            <a
              href="https://github.com/nouhailaBJ"
              className="icon-holder"
              target="_blank"
            >
              <FaGithub className="icon gh" />
            </a>
            <a
              href="https://www.linkedin.com/in/nouhaila-bjaghou-245406200/"
              className="icon-holder"
              target="_blank"
            >
              <FaLinkedin className="icon gh" />
            </a>
            <a
              href="https://www.instagram.com/nouhailabja"
              className="icon-holder"
              target="_blank"
            >
              <FaInstagram className="icon ins" />
            </a>
            <a href="" className="icon-holder" target="_blank">
              <FaTwitter className="icon tw" />
            </a>
          </div>
        </h1>
      </header>
    </div>
  );
}

export default HomePage;
