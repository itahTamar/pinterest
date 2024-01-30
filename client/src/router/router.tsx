import { createBrowserRouter } from "react-router-dom";
import RLhomepage from "../view/RLhomepage";
import Login from "../components/user/Login";
import Register from "../components/user/Register";
import UserPage from "../view/UserPage";
import UserBoardPage from "../view/UserBoardPage";

export const router = createBrowserRouter([
    {path: "", element: <RLhomepage/>},
    {path: "/login", element: <Login/>},
    {path: "/register", element: <Register/> },
    {path: "/userPage", element: <UserPage/> },
    {path: "/userBoardPage", element: <UserBoardPage/>},
    // {path: "/main", element: <Main/>},
    // {path: "/pinPage", element: <PinPage/>}
])