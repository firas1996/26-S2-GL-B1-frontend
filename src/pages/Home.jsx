import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    navigate("/login");
  };

  return (
    <div>
      <h1>Welcome Back .......</h1>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default Home;
