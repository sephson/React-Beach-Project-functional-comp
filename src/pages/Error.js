import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
function Error() {
  return (
    <div>
      <Hero>
        <Banner title="404" subTitle="This Page Doesnt Exist">
          <Link className="btn-primary" to="/">
            Go Home
          </Link>
        </Banner>
      </Hero>
    </div>
  );
}

export default Error;
