import React from "react";
import About from "./About";
import Rockets from "./Rockets";

const Main = ({ invCount, setInvCount }) => {
  return (
    <main>
      <About />
      <Rockets invCount={invCount} setInvCount={setInvCount} />
    </main>
  );
};

export default Main;
