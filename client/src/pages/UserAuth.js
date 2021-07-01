import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
// import LoginButton from "../components/login/loginbutton";

function UserAuth() {
  const [usernameLogin, setUserNameLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const history = useHistory();

  const login = () => {
    Axios.post("http://localhost:5000", {
      username: usernameLogin,
      password: passwordLogin,
    }).then((response) => {
      console.log(response);
    });
  };

  function loginSucess() {
    login();
    history.push("/mainpage");
  }
  return (
    <div>
      <form>
        <div className="form-group text-left">
          <label htmlFor="exampleInputEmail1">Username</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            id="username"
            onChange={(e) => {
              setUserNameLogin(e.target.value);
            }}
          />
        </div>

        <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={(e) => {
              setPasswordLogin(e.target.value);
            }}
          />
        </div>

        <button onClick={loginSucess}>Login</button>
      </form>
    </div>
  );
}

export default UserAuth;
