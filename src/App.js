import "swiper/swiper.min.css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";

import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Routes from "./config/Routes";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <>
        <Routes />
      </>
      )
    </BrowserRouter>
  );
}

export default App;
