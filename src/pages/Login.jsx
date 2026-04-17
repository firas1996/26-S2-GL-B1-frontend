import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handelChange = ({ target }) => {
    const { name, value } = target;
    setUserData({ ...userData, [name]: value });
  };
  const loginHandler = () => {
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
