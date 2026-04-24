import React, { useEffect } from "react";
import FirstComp from "./components/FirstComp";
import Login from "./pages/Login";
import MyFrag from "./components/MyFrag";
import Home from "./pages/Home";
import { Route, Routes, useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
    console.log("effect");
  }, []);
  console.log("outside");

  return (
    <>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/" Component={Home} />
      </Routes>
    </>
  );
};
export default App;
