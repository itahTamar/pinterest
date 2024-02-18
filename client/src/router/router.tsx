import { createBrowserRouter } from "react-router-dom";
import RLhomepage from "../view/RLhomepage/RLhomepage";
import Login from "../components/user/login/Login";
import Register from "../components/user/Register";
import { HomePage } from "../view/HomePage/HomePage";
import { CreatePin } from "../view/CreatePin/CreatePin";
import SavedPins from "../components/Pins/SavedPins";
import PinPage from "../view/pinPage";
import Main from "../components/main/Main";
import BoardCard from "../components/board/addBoard/BoardCard";
import BoardPage from "../view/boardPage";
import { EditProfile } from "../components/user/EditProfile/EditProfile";
import UserPage from "../view/UserPage/userPage";

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
      { path: "editProfile", element: <EditProfile /> },
      { path: "boardPage/:board.name", element: <BoardPage /> },
      {
        path: "boardCard/:board.name",
        element: <BoardCard board={undefined} />,
      },
    ],
  },
]);
