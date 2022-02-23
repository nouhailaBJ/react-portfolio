import React from "react";

function ServiceSection({ image, title, desc }) {
  return (
    <div className="ServicesSection">
      <div className="service">
        <div className="service-content">
          <img src={image} alt="" />
          <h5 className="s-title">{title}</h5>
          <p className="s-text">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
