import React, { useContext, useEffect, useState } from 'react'
import { login } from '../../api/users/userApi'
import { useNavigate } from 'react-router-dom'
import '../../style/login.css'
import { UserContext } from '../../contexts/userContext'

//work ok
const Login = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const navigate = useNavigate()
    const { user, setUser } = useContext(UserContext)

    const handleSubmitLogin = async (ev: React.FormEvent<HTMLFormElement>) => {
        try {
            ev.preventDefault()
            console.log("At handleSubmit login the email, password, username are:", email, password)
            const data = await login(email, password)
            console.log("at handleSubmitLogin the data:", data)
            if (!data){
                window.alert("login failed! check your email or password or please register first")
               throw new Error("login failed, please register first"); 
            } 

            const userData = data.data.userData
            console.log("at handleSubmitLogin the userData:", userData)
            if (!userData) throw new Error("at handleSubmitLogin userData failed");

            setUser(userData)

            navigate(`/main/homePage`)

        } catch (error) {
            console.error(error)
        }
    }
    
    useEffect(() => {
        console.log("at Login.tsx the userData:", user)
    }, [user]);
    return (

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

    )
}

export default Login