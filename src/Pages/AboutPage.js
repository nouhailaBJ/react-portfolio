import React from "react";
import Title from "../components/Title";
import ImageSection from "../components/ImageSection";
import SkillsSection from "../components/SkillsSection";
import ServiceSection from "../components/ServiceSection";
import seo from "../img/web-page.png";
import design from "../img/design-thinking.png";
import web from "../img/web-development.png";

function AboutPage() {
  return (
    <div className="AboutPage">
      <Title title="About Me" span="About Me" />
      <ImageSection />
      <Title title="My Services" span="My Services" />
      <div className="services-container">
        <ServiceSection image={web} title={"Web devlopper"} desc="" />
        <ServiceSection image={design} title={"UI/UX DESIGN"} desc="" />
        <ServiceSection image={seo} title={"SEO OPTIMIZE"} desc="" />
        <ServiceSection image={design} title={"Web DESIGN "} desc="" />
      </div>
    </div>
  );
}

export default AboutPage;
