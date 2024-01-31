import { createBrowserRouter } from "react-router-dom";
import RLhomepage from "../view/RLhomepage";
import Login from "../components/user/Login";
import Register from "../components/user/Register";
import UserPage from "../view/userPage";
import UserBoardPage from "../view/userBoardPage";
import { HomePage } from "../components/HomePage/HomePage";

export const router = createBrowserRouter([
    {path: "", element: <RLhomepage/>},
    {path: "/login", element: <Login/>},
    {path: "/register", element: <Register/> },
    {path: "/userPage", element: <UserPage/> },
    {path: "/userBoardPage", element: <UserBoardPage/>},
    {path: "/homePage", element: <HomePage/>},
    // {path: "/pinPage", element: <PinPage/>}
])