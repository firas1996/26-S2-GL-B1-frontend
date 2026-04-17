import React from "react";

const FirstComp = ({ name, getData }) => {
  const x = "Hello, World!";
  getData(x);
  return (
    <>
      <h2>Welcome back {name} ! </h2>
    </>
  );
};

export default FirstComp;
