import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = () => {
    const accessToken = localStorage.getItem("accessToken");
    // Misalkan token tersedia dan valid, Anda dapat menambahkan logika validasi di sini
    return accessToken !== null; // Contoh sederhana
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
