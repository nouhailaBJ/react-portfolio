import React from "react";
import about from "../img/nouhaila.jpeg";
function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am <span>Nouhaila Bjaghou</span>
        </h4>
        <p>
          I'm currently a student at 1337, And full-stack Web developer with 3
          years of experience and working as a freelancer
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name </p>
            <p>Age</p>
            <p>My Email</p>
            <p>Languages</p>
            <p>Address </p>
            <p>Nationality</p>
          </div>
          <div className="right-section">
            <p>: Nouhaila Bjaghou</p>
            <p>: 21 years old</p>
            <p>: bjaghoun@gmail.com</p>
            <p>: Arabic, Frensh, English</p>
            <p>: Fes, Morocco </p>
            <p>: Morrocan</p>
          </div>
        </div>
        <form action="/nouhailaBjaghou.pdf" method="get">
          <button className="btn">Download CV</button>
        </form>
      </div>
    </div>
  );
}

export default ImageSection;
