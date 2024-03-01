import { Outlet } from "react-router-dom";
// import { handleGetUserByCookie } from "../../api/users/userApi";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { Navbar } from "../navbars/Navbar/Navbar";
import { handleGetUserByCookie } from "../../api/users/userApi";
// import { User } from "../../types/user";

const Main = () => {
  const { user, setUser } = useContext(UserContext)
  const [currentUser, setCurrentUsr] = useState()
  console.log("at Main.tsx the user from UserContext:", user)

  useEffect(() => {
    getData();
    console.log("at Main.tsx user in context:", user);
  }, []);

    const getData = async () => { //!this doesn't happened
      try {
        const result = await handleGetUserByCookie();
        if (!result)
          throw new Error("At main handleGetUserByCookie did't get result");

        const userData = result.data.userData;
        console.log("at getData in main the userData:", userData);
        if (!userData) throw new Error("at gerData in main userData failed");

        setCurrentUsr(userData);

      } catch (error) {
        console.error(error);
      }
    };

  return (
    <div>
      {/* @ts-ignore */}
      <UserContext.Provider value={{ currentUser, setUser }}>
        <Navbar />
        <Outlet />
      </UserContext.Provider>
    </div>
  );
};

export default Main;
