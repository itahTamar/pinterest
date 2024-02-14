import { createBrowserRouter } from "react-router-dom";
import RLhomepage from "../view/RLhomepage/RLhomepage";
import Login from "../components/user/Login";
import Register from "../components/user/Register";
import { HomePage } from "../components/HomePage/HomePage";
import { CreatePin } from "../view/CreatePin/CreatePin";
import UserPage from "../view/userPage";
import SavedPins from "../components/Pins/SavedPins";
import { EditProfile } from "../components/EditProfile/EditProfile";
import PinPage from "../view/pinPage";
import Main from "../components/main/Main";


export const router = createBrowserRouter([
  { path: "/", element: <RLhomepage /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/main",
    element: <Main />,
    children: [
      { path: "homePage", element: <HomePage /> },
      { path: "userPage", element: <UserPage /> },
      { path: "savedPin", element: <SavedPins /> },
      { path: "createPin", element: <CreatePin /> },
      { path: "pinPage/:pin_id", element: <PinPage /> },
      { path: "editProfile", element: <EditProfile /> }
    ]
  }
]);
