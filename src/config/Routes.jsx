import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/detail/Detail";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRoute from "./PrivateRoute"; // Import komponen PrivateRoute yang sudah diperbaharui

const Routes = () => {
  return (
    <Switch>
      {/* Rute yang memerlukan autentikasi menggunakan PrivateRoute */}
      <PrivateRoute path="/home" component={Home} />
      <PrivateRoute path="/search/:category/:keyword" component={Catalog} />
      <PrivateRoute path="/detail/:category/:id" component={Detail} />
      <PrivateRoute path="/category/:category" component={Catalog} />
      {/* Rute non-autentikasi */}
      <Route path="/" exact component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  );
};

export default Routes;
