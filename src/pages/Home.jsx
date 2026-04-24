import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <button onClick={logoutHandler}>Logout</button>
      <ul>
        <li>user1</li>
        <li>user2</li>
      </ul>
    </div>
  );
};

export default Home;
