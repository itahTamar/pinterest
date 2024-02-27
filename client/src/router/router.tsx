import { createBrowserRouter } from "react-router-dom";
import RLhomepage from "../view/RLhomepage/RLhomepage";
import Login from "../components/user/login/Login";
import Register from "../components/user/Register";
import { HomePage } from "../view/HomePage/HomePage";
import SavedPins from "../components/Pins/SavedPins";
import PinPage from "../view/pinPage";
import BoardCard from "../components/board/addBoard/BoardCard";
import BoardPage from "../view/boardPage";
import { EditProfile } from "../components/user/EditProfile/EditProfile";
import { CreatePin } from "../view/CreatePinPage/CreatePin";
import UserPage from "../view/UserPage/userPage";
import AdminPage from "../view/AdminPage";
import { EditPin } from "../components/Pins/EditPin/EditPin";
import Layout from "../components/main/Layout";
import PageOfCreatedPin from "../view/PageOfCreatedPin";

export const router = createBrowserRouter([
  { path: "/", element: <RLhomepage /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/main",
    element: <Layout />,
    children: [
      { path: "homePage", element: <HomePage /> },
      { path: "userPage", element: <UserPage /> },
      { path: "savedPin", element: <SavedPins /> },
      { path: "createPin", element: <CreatePin /> },
      { path: "pinPage/:pin_id", element: <PinPage /> },
      { path: "PageOfCreatedPin/:pin_id", element: <PageOfCreatedPin /> },
      { path: "editPin/:pin_id", element: <EditPin /> },
      { path: "editProfile", element: <EditProfile /> },
      { path: "boardPage/:boardName", element: <BoardPage /> },
      {
        path: "boardCard/:board.name",
        element: <BoardCard board={undefined} />,
      },
    ],
  },
  {path: "/admin", element: <AdminPage />}
]);
