import React, { useContext, useEffect, useState } from 'react'
import { login } from '../../api/users/userApi'
import { useNavigate } from 'react-router-dom'
import '../../style/login.css'
import { UserContext } from '../../contexts/userContext'
import { User } from '../../types/user'

//work ok
const Login = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const navigate = useNavigate()
    const [userData, setUserData] = useState<User>()
    // const userData = useContext(UserContext);

    useEffect(() => {
        console.log("at Login.tsx the userData:", userData)
      }, [userData]); // This useEffect runs whenever userData changes

    const handleSubmitLogin = async (ev: React.FormEvent<HTMLFormElement>) => {
        try {
            ev.preventDefault()
            console.log("At handleSubmit login the email, password, username are:", email, password)
            const data = await login(email, password)
            console.log("at handleSubmitLogin the data:", data)
            console.log("at handleSubmitLogin the data:", data?.data.resultUserName)
            if(!data) throw new Error("login failed, please register first");
            const username = data.data.resultUserName
            console.log("at handleSubmitLogin the username:", username)
            if (!username) throw new Error("at handleSubmitLogin username data failed to come");
            
            setUserData(username)
            // userData.setUser(data);

            navigate(`/homePage`)

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <UserContext.Provider value={{userData, setUserData}}>
            <div className='login-container'>
                <form className="login-form" onSubmit={handleSubmitLogin}>
                    <label>Email</label>
                    <input type='email' name='email' autoComplete='given-name' placeholder='Email' value={email} onInput={(ev) => setEmail((ev.target as HTMLInputElement).value)}></input>
                    <label>Password</label>
                    <input type='password' name='password' autoComplete='off' placeholder='Password' value={password} onInput={(ev) => setPassword((ev.target as HTMLInputElement).value)}></input>
                    <button type='submit'>Login</button>
                </form>
                <button onClick={() => { navigate("/register") }}>Register First</button>
            </div>
        </UserContext.Provider>
    )
}

export default Login