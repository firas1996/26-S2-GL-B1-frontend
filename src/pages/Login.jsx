import { useState } from "react";
import "./Login.css";
import axios from "axios";

const Login = ({ setIsLoggedIn }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handelChange = ({ target }) => {
    const { name, value } = target;
    setUserData({ ...userData, [name]: value });
  };
  const loginHandler = () => {
    axios
      .post("http://localhost:1122/users/signin", {
        email: userData.email,
        password: userData.password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setIsLoggedIn(true);
      })
      .catch((e) => {
        console.log(e);
      });
    // axios
    //   .get("http://localhost:1122/users")
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
    console.log(userData);
    setUserData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="container">
      <div>
        <div className="divInp">
          <label>Email</label>
          <input
            type="text"
            onChange={handelChange}
            name="email"
            value={userData.email}
          />
        </div>
        <div className="divInp">
          <label>Password</label>
          <input
            type="password"
            onChange={handelChange}
            name="password"
            value={userData.password}
          />
        </div>
      </div>
      <div>
        <button onClick={loginHandler}>Login</button>
      </div>
    </div>
  );
};

export default Login;
