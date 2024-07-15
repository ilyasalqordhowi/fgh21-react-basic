import React from "react";
import asset_login from "../assets/img/spotify.png";

function Login() {
  function doLogin(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const password = event.target.password.value;
    const email = event.target.email.value;
    if (
      name === "ilyas" &&
      email === "ilyas@mail.com" &&
      password === "ilyas123"
    ) {
      window.alert("benar");
    } else {
      window.alert("salah");
    }
    if (name === "" && email === "" && password === "") {
      window.alert("harus di isi");
    }
    doLogin();
  }
  return (
    <div className="container">
      <div className="container-box">
        <div className="container-top">
          <img src={asset_login} alt="login"></img>
          <div className="container-sign">
            <div>SIGN IN</div>
            <div>SIGN UP</div>
          </div>
        </div>
        <form onSubmit={doLogin}>
          <div className="container-input">
            <input type="text" name="name" placeholder="username"></input>
            <input type="email" name="email" placeholder="email"></input>
            <input
              type="password"
              name="password"
              placeholder="password"
            ></input>
            <button type="submit">SIGN IN</button>
            <label htmlFor="check">stay signed in</label>
          </div>
        </form>
        <div className="container-bottom">Forgot Password?</div>
      </div>
    </div>
  );
}

export default Login;
