import { createBrowserRouter } from "react-router-dom";
import RLhomepage from "../view/RLhomepage";
import Login from "../components/user/Login";
import Register from "../components/user/Register";
import { HomePage } from "../components/HomePage/HomePage";
import { CreatePin } from "../view/CreatePin/CreatePin";
import UserBoardPage from "../view/userBoardPage";
import UserPage from "../view/userPage";

export const router = createBrowserRouter([
    {path: "", element: <RLhomepage/>},
    {path: "/login", element: <Login/>},
    {path: "/register", element: <Register/> },
    {path: "/userPage", element: <UserPage/> },
    {path: "/userBoardPage", element: <UserBoardPage/>},
    {path: "/homePage", element: <HomePage/>},
    {path: "/createPin", element: <CreatePin/>},
    // {path: "/pinPage", element: <PinPage/>}
])