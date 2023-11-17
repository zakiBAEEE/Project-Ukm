import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/tmovie.png";
import "./login.css";

const Login = () => {
  return (
    <body>
      <div class="containerInduk">
        <div class="containerHeader">
          <img src={logo} alt="" class="logo" />
          <h2>MyFilmFx</h2>
        </div>

        <form action="action_page.php" class="form_login">
          <div class="container_login">
            <div className="judul">
              <h1>Log In</h1>
            </div>

            <hr />
            <label for="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              id="email"
              required
            ></input>

            <label for="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              id="psw"
              required
            ></input>

            <label for="psw-repeat">
              <b>Repeat Password</b>
            </label>
            <input
              type="password"
              placeholder="Repeat Password"
              name="psw-repeat"
              id="psw-repeat"
              required
            ></input>
            <hr />
            <button type="submit" class="registerbtn">
              Login
            </button>
          </div>

          <div class="container signin">
            <p>
              Belum Memiliki Akun? <a href="/register">Register</a>.
            </p>
          </div>
        </form>
      </div>
    </body>
  );
};

export default Login;


// salah di halaman login