import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { handleGetUserByCookie } from "../../api/users/userApi";
import { UserContext } from "../../contexts/userContext";
import { User } from "../../types/user";
import { Navbar } from "../navbars/Navbar/Navbar";

const Layout = () => {
  // const [user, setUser] = useState<any>(null)
  const { user, setUser } = useContext(UserContext);

  const getData = async () => {
    try {
      const result = await handleGetUserByCookie();

      if (!result)
        throw new Error("At main handleGetUserByCookie did't get result");

      const userData = result.data.results;
      if (!userData) throw new Error("at gerData in main userData failed");

      setUser(userData as User);
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
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
