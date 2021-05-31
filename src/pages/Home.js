import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

import StyledHero from "../components/StyledHero";
function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="Luxurious Rooms"
          subTitle="deluxe rooms starting at $300"
        >
          <Link className="btn-primary" to="/rooms">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
      <StyledHero> Styled Hero</StyledHero>
    </>
  );
}

export default Home;
