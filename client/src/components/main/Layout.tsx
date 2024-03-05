import { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { handleGetUserByCookie } from "../../api/users/userApi";
import { UserContext } from "../../contexts/userContext";
import { User } from "../../types/user";
import { Navbar } from "../navbars/Navbar/Navbar";
import { NavbarUserPage } from "../navbars/NavbarUserPage/NavbarUserPage";

const Layout = () => {
  // const [user, setUser] = useState<any>(null)
  const {user, setUser} = useContext(UserContext)
  const [thisUser, setCurrentUser] = useState()
  const [check, setCheck] = useState("home")
  // const [key, setKey] = useState(false)
  // console.log("at Main.tsx the user from UserContext:", user)

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
        setUser(userData as User)
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
      if (!user) {
        getData();
      }
    }, []);

  return (
    <div>
      {/* <UserContext.Provider value={{user, setUser}}> */}
       {/* { check === "home" ?  */}
       <Navbar setCheck={setCheck}/> 
        {/* : <NavbarUserPage/>} */}
        <Outlet />
      {/* </UserContext.Provider> */}
    </div>
  );
};

export default Layout;
