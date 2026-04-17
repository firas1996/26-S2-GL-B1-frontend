import React, { useState } from "react";
import FirstComp from "./components/FirstComp";
import Login from "./pages/Login";
import MyFrag from "./components/MyFrag";

const App = () => {
  // const name = "Firas";
  // const [y, setY] = useState("");
  // const getData = (data) => {
  //   setY(data);
  // };
  // console.log(y);
  return (
    <MyFrag>
      {/* <h1>test</h1> */}
      {/* <h1>{y}</h1>
      <FirstComp name={name} getData={getData} />*/}
      <Login />
    </MyFrag>
  );
};
export default App;
