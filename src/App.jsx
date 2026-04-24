import React, { useEffect } from "react";
import FirstComp from "./components/FirstComp";
import Login from "./pages/Login";
import MyFrag from "./components/MyFrag";
import Home from "./pages/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import UserDetails from "./pages/UserDetails";

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
        <Route path="/users/details/:id" Component={UserDetails} />
      </Routes>
    </>
  );
};
export default App;
