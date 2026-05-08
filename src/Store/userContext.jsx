import axios from "axios";
import { createContext, useEffect, useState } from "react";

const UsersStore = createContext({
  users: [],
  getUsers: () => {},
  getUserById: () => {},
});
export default UsersStore;

export const UsersProvider = ({ children }) => {
  const [usersX, setUsersX] = useState([]);
  const getUsers = () => {
    axios
      .get("http://localhost:1122/users")
      .then((res) => {
        setUsersX(res.data.data.users);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getUsers();
  }, []);

  const getUserById = (id) => {
    console.log(usersX);
    return usersX.find((user) => user._id === id); // id from params must be equal to _id from one of the object in usersX in that case retutrn that object
  };
  return (
    <UsersStore.Provider
      value={{
        users: usersX,
        getUsers: getUsers,
        getUserById: getUserById,
      }}
    >
      {children}
    </UsersStore.Provider>
  );
};
