import React from "react";
import asset_login from "../assets/img/spotify.png";

function Login() {
  function doLogin(event) {
    const name = event.target.name.value;
    const password = event.target.email.value;
    if (name === "ilyas" && password === "ilyas123") {
      window.alert("benar");
    }
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
            <input type="text" name="name"></input>
            <input type="password" name="password"></input>
            <button>SIGN IN</button>
            <label htmlFor="check">stay signed in</label>
          </div>
        </form>
        <div className="container-bottom">Forgot Password?</div>
      </div>
    </div>
  );
}

export default Login;
