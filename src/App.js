import "swiper/swiper.min.css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";

import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./config/Routes";

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes />
      </>
    </BrowserRouter>
  );
}

export default App;
