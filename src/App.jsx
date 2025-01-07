import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
// import Register from "./components/Register";
// import Login from "./components/Login";
import Footer from "./components/Footer";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      {/* <Register /> */}
      {/* <Login /> */}
      <Footer />
    </>
  );
}

export default App;
