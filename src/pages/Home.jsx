import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UsersStore from "../Store/userContext";

const Home = () => {
  const navigate = useNavigate();
  const [usersList, setUsersList] = useState([]);
  const { users } = useContext(UsersStore);
  useEffect(() => {
    // console.log(users)
    setUsersList(
      users.map((item) => {
        return { id: item._id, name: item.name };
      }),
    );
  }, []);
  console.log(usersList);
  const usersItem = usersList.map((item) => {
    return (
      <Link to={`/users/details/${item.id}`}>
        <li>{item.name}</li>
      </Link>
    );
  });
  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <button onClick={logoutHandler}>Logout</button>
      <ul>{usersItem}</ul>
    </div>
  );
};

export default Home;
