import React from "react";
import rocket1 from "../img/rocket1.jpg";
import rocket2 from "../img/rocket2.jpg";
import rocket3 from "../img/rocket3.jpg";

const About = () => {
  return (
    <section class="section-about">
      <div class="u-center-text u-margin-bottom-big">
        <h2 class="heading-secondary">Are you ready for liftoff?</h2>
      </div>
      <div class="row">
        <div class="col-1-of-2">
          <h3 class="heading-tertiary u-margin-bottom-small">
            Elon Musk has one goal and it's for you
          </h3>
          <p class="paragraph">
            With the emergence of cryptocurrencies hitting the world on a global
            scale, our lord and savior Elon Musk has decided everyone is headed
            towards the moon. Like the actual moon orbiting earth.
          </p>

          <h3 class="heading-tertiary u-margin-bottom-small">
            Come check out our selection of only the greatest commercial Space-X
            rocket ships
          </h3>
          <p class="paragraph">
            We provide the world's most luxurious carriers to make your travel
            as easy and comfortable as possible.
          </p>
        </div>
        <div class="col-1-of-2">
          <div class="composition">
            <img
              src={rocket1}
              alt="Photo 1"
              class="composition__photo composition__photo--p1"
            />
            <img
              src={rocket2}
              alt="Photo 2"
              class="composition__photo composition__photo--p2"
            />
            <img
              src={rocket3}
              alt="Photo 3"
              class="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
