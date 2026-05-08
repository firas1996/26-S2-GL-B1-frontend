import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UsersStore from "../Store/userContext";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const { getUserById } = useContext(UsersStore);
  useEffect(() => {
    setUser(getUserById(id));
  }, []);

  console.log(user);
  return (
    <div>
      <h1>User Name: {user.name} </h1>
      <h1>User Email: {user.email} </h1>
    </div>
  );
};

export default UserDetails;
