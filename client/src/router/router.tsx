import BooksPage from "";
import SpecificBookPage from "";
import { createBrowserRouter } from "react-router-dom";
import Register from "";
import Login from "";
import AddBook from "";

export const router = createBrowserRouter([
    {path: "", element: <Login/>},
    {path: "/login", element: <Login/>},
    {path: "/register", element: <Register/> },
    {path: "/booksPage", element: <BooksPage/> },
    {path: "/book/:title/:book_id", element: <SpecificBookPage/>},
    {path: "/add-book", element: <AddBook/>}
    
])