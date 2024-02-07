import { Outlet } from "react-router-dom"
import { Navbar } from "../Navbar/Navbar"
import { handleGetUserByCookie } from "../../api/users/userApi"
import { useContext, useEffect } from "react"
import { UserContext } from "../../contexts/userContext"

const Main = () => {
    const { user, setUser } = useContext(UserContext)

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await handleGetUserByCookie()
                if (!result) throw new Error("At main handleGetUserByCookie did't get result");

                const userData = result.data.userData
                console.log("at handleSubmitLogin the userData:", userData)
                if (!userData) throw new Error("at handleSubmitLogin userData failed");

                setUser(userData)

                console.log(user)
 
            } catch (error) {
                console.error(error)
            }
        }

        getData()
    }, [])

    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Main
