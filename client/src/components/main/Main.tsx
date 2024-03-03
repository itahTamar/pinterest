import { Outlet } from "react-router-dom";
// import { handleGetUserByCookie } from "../../api/users/userApi";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { Navbar } from "../navbars/Navbar/Navbar";
import { handleGetUserByCookie } from "../../api/users/userApi";
import { NavbarUserPage } from "../navbars/NavbarUserPage/NavbarUserPage";
// import { User } from "../../types/user";

const Main = () => {
  const { user, setUser } = useContext(UserContext)
  const [thisUser, setCurrentUser] = useState()
  const [check, setCheck] = useState("home")
  console.log("at Main.tsx the user from UserContext:", user)

    const getData = async () => { 
      try {
        const result = await handleGetUserByCookie();
        console.log("at getData in main the result",result)

        if (!result)
          throw new Error("At main handleGetUserByCookie did't get result");
          console.log("at getData in main the result.data.results",result.data.results)

        const userData = result.data.results;
        console.log("at getData in main the userData:", userData);
        if (!userData) throw new Error("at gerData in main userData failed");

        setCurrentUser(userData);
        setUser(userData)
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
      getData();
      console.log("at Main.tsx user in context:", user);
      console.log("at Main.tsx thisUser in state:", thisUser);

    }, []);

  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
       { check === "home" ? <Navbar setCheck={setCheck}/> : <NavbarUserPage/>}
        <Outlet />
      </UserContext.Provider>
    </div>
  );
};

export default Main;
