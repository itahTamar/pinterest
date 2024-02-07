import { createBrowserRouter } from "react-router-dom";
import RLhomepage from "../view/RLhomepage/RLhomepage";
import Login from "../components/user/Login";
import Register from "../components/user/Register";
import { HomePage } from "../components/HomePage/HomePage";
import { CreatePin } from "../view/CreatePin/CreatePin";
import UserBoardPage from "../view/userBoardPage";
import UserPage from "../view/userPage";
import PinPage from "../view/PinPage";
import SavedPins from "../components/Pins/SavedPins";

import { EditProfile } from "../components/EditProfile/EditProfile";


export const router = createBrowserRouter([
  { path: "", element: <RLhomepage /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/homePage", element: <HomePage /> }, 
  { path: "/userPage", element: <UserPage /> },
  { path: "/userBoardPage", element: <UserBoardPage /> },
  {path: "/savedPin", element: <SavedPins/>},
  { path: "/createPin", element: <CreatePin /> },
  {path: "/pinPage/:pin_id", element: <PinPage/>},
  { path: "/editProfile", element: <EditProfile /> },
  // {path: "/pinPage", element: <PinPage/>}

]);
