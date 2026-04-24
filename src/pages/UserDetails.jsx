import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:1122/users/${id}`)
      .then((res) => {
        setUser({
          name: res.data.data.user.name,
          email: res.data.data.user.email,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div>
      <h1>User Name: {user.name} </h1>
      <h1>User Email: {user.email} </h1>
    </div>
  );
};

export default UserDetails;
