import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header.js";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { useState } from "react";

const App = () => {
  const [invCount, setInvCount] = useState(0);
  return (
    <>
      <Cart invCount={invCount} />
      <Header />
      <Main invCount={invCount} setInvCount={setInvCount} />
      <Footer />
    </>
  );
};

export default App;
