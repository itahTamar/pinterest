import React, { useState } from 'react'
import { login } from '../../api/users/userApi'
import { useNavigate } from 'react-router-dom'
import '../../style/login.css'

//
const Login = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [username, setUsername] = useState<string>("")

    const navigate = useNavigate()

    const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
        try {
            ev.preventDefault()
            console.log("At handleSubmit login the email, password, username are:", email, password, username)
            const data = await login(username, email, password)
            console.log(data)

            if (!data) throw new Error("login failed, please register first");
            navigate(`/homePage/${username}`)

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <div className='login-container'>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label>User Name</label>
                    <input type='username' name='username' autoComplete='given-name' placeholder='username' value={username} onInput={(ev) => setUsername((ev.target as HTMLInputElement).value)}></input><label>Email</label>
                    <input type='email' name='email' autoComplete='given-name' placeholder='Email' value={email} onInput={(ev) => setEmail((ev.target as HTMLInputElement).value)}></input>
                    <label>Password</label>
                    <input type='password' name='password' autoComplete='off' placeholder='Password' value={password} onInput={(ev) => setPassword((ev.target as HTMLInputElement).value)}></input>
                    <button type='submit'>Login</button>
                </form>
                <button onClick={() => { navigate("/register") }}>Register First</button>
            </div>
        </>
    )
}

export default Login