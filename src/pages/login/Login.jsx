import React, { useState } from "react";
import logo from "../../assets/tmovie.png";
import "./login.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  if (localStorage.getItem("accessToken")) {
    localStorage.removeItem("accessToken");
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`Username : ${username}`);
    console.log(`Password : ${password}`);

    const savedUsername = localStorage.getItem("userUsername");
    const savedPassword = localStorage.getItem("userPassword");

    if (savedUsername === username && savedPassword === password) {
      // Autentikasi berhasil
      alert("Login berhasil!");
      localStorage.setItem("accessToken", savedUsername);
      history.push("/home");
    } else {
      // Autentikasi gagal
      alert("Email/Username atau Password salah. Silakan coba lagi.");
    }
  }

  return (
    <div className="containerInduk">
      <div className="containerHeader">
        <img src={logo} alt="" className="logo" />
        <h2>MyFilmFx</h2>
      </div>

      <form onSubmit={handleSubmit} className="form_login">
        <div className="container_login">
          <div className="judul">
            <h1>Log In</h1>
          </div>

          <hr />
          <label htmlFor="email">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="email"
            id="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          ></input>

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="psw"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>

          <hr />
          <button type="submit" className="registerbtn">
            Login
          </button>
        </div>

        <div className="container signin">
          <p>
            Belum Memiliki Akun? <a href="/register">Register</a>.
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
