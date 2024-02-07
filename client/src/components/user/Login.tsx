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
    const {user, setUser} = useContext(UserContext)

    useEffect(() => {
        console.log("at Login.tsx the userData:", user)
    }, [user]); //! This useEffect runs whenever userData changes - for check only --> userData = undefined

    const handleSubmitLogin = async (ev: React.FormEvent<HTMLFormElement>) => {
        try {
            ev.preventDefault()
            console.log("At handleSubmit login the email, password, username are:", email, password)
            const data = await login(email, password)
            console.log("at handleSubmitLogin the data:", data)
            console.log("at handleSubmitLogin the data:", data?.data.resultUserName)
            if (!data) throw new Error("login failed, please register first");
            const username = data.data.resultUserName
            console.log("at handleSubmitLogin the username:", username)//got it!
            if (!username) throw new Error("at handleSubmitLogin username data failed to come");

            setUser({username: data.data.resultUserName })  

            navigate(`/homePage/${username}`)

        } catch (error) {
            console.error(error)
        }
    }

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