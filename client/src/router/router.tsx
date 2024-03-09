import { createBrowserRouter } from "react-router-dom";
import { EditPin } from "../components/Pins/EditPin/EditPin";
import SavedPins from "../components/Pins/SavedPins/SavedPins";
import Layout from "../components/main/Layout";
import { EditProfile } from "../components/user/EditProfile/EditProfile";
import Login from "../components/user/login/Login";
import Register from "../components/user/register/Register";
import AdminPage from "../view/AdminPage/AdminPage";
import { CreatePin } from "../view/CreatePinPage/CreatePin";
import { HomePage } from "../view/HomePage/HomePage";
import PinPage from "../view/PinPage/pinPage";
import RLhomepage from "../view/RLhomepage/RLhomepage";
import UserPage from "../view/UserPage/userPage";
import BoardPage from "../view/boardPage/boardPage";
import PageOfCreatedPin from "../view/PageOfCreatedPin";

export const router = createBrowserRouter([
  { path: "/", element: <RLhomepage /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/main",
    element: <Layout />,
    children: [
      { path: "homePage", element: <HomePage /> },
      { path: "userPage", element: <UserPage /> },
      { path: "savedPin", element: <SavedPins /> },
      { path: "createPin", element: <CreatePin /> },
      { path: "pinPage/:pin_id", element: <PinPage /> },
      { path: "editPin/:pin_id", element: <EditPin /> },
      { path: "editProfile", element: <EditProfile /> },
      { path: "boardPage/:boardName", element: <BoardPage /> },
      { path: "PageOfCreatedPin/:pin_id", element: <PageOfCreatedPin /> },
    ],
  },
  { path: "/admin", element: <AdminPage /> },
]);
