import React from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

function Services() {
  const state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        paragraph:
          "Lorem ipsum dolor sit at amet consecutor adipsing elsile marginbe coprions",
      },
      {
        icon: <FaHiking />,
        title: "Free Hiking",
        paragraph:
          "Lorem ipsum dolor sit at amet consecutor adipsing elsile marginbe coprions",
      },
      {
        icon: <FaShuttleVan />,
        title: "Move around the way you want",
        paragraph:
          "Lorem ipsum dolor sit at amet consecutor adipsing elsile marginbe coprions",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        paragraph:
          "Lorem ipsum dolor sit at amet consecutor adipsing elsile marginbe coprions",
      },
    ],
  };
  return (
    <section className="services">
      <Title title="Services"></Title>
      <div className="services-center">
        {state.services.map((item, index) => {
          return (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.paragraph}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
