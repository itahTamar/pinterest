import { Outlet } from "react-router-dom";
import { handleGetUserByCookie } from "../../api/users/userApi";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { Navbar } from "../navbars/Navbar/Navbar";

const Main = () => {
  // const { user, setUser } = useContext(UserContext)
  const [user, setUser] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await handleGetUserByCookie();
        if (!result)
          throw new Error("At main handleGetUserByCookie did't get result");

        const userData = result.data.userData;
        console.log("at getData in main the userData:", userData);
        if (!userData) throw new Error("at gerData in main userData failed");

        setUser(userData);
      } catch (error) {
        console.error(error);
      }
    };

    getData();

    console.log("user in context:", user);
  }, []);

  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <Navbar />
        <Outlet />
      </UserContext.Provider>
    </div>
  );
};

export default Main;
