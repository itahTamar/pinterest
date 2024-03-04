import { Outlet } from "react-router-dom"
import { handleGetUserByCookie } from "../../api/users/userApi"
import { useContext, useEffect } from "react"
import { UserContext } from "../../contexts/userContext"
import { Navbar } from "../navbars/Navbar/Navbar"

const Layout = () => {
    const { user, setUser } = useContext(UserContext)

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await handleGetUserByCookie()
                if (!result) throw new Error("At Layout handleGetUserByCookie did't get result");

                const userData = result.data.userData
                console.log("at getData in Layout the userData:", userData)
                if (!userData) throw new Error("at gerData in Layout userData failed");

                setUser(userData)
 
            } catch (error) {
                console.error(error)
            }
        }

        getData()

        console.log("at Layout, user in context:", user)
    }, [])

    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Layout
