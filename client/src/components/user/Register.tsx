import { useState } from 'react'
import { register } from '../../api/users/userApi'
import { useNavigate } from 'react-router-dom'
import '../../style/register.css'

//

const Register = () => {
    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const navigate = useNavigate()


const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    try {
        ev.preventDefault()
        const data = await register(username, email, password)
        console.log(data)
        
        if (!data)throw new Error("register failed");
        
        navigate("/login")
        
    } catch (error) {
        console.error(error)
    }
}

  return (
    <form className="register-form" onSubmit={handleSubmit}>
        <input type='text' name='username' autoComplete='given-name' placeholder='User Name' value={username} onInput={(ev) => setUsername((ev.target as HTMLInputElement).value)}></input>
        <input type='email' name='email' autoComplete='given-name' placeholder='Email' value={email} onInput={(ev) => setEmail((ev.target as HTMLInputElement).value)}></input>
        <input type='password' name='password' autoComplete='off' placeholder='Password' value={password} onInput={(ev) => setPassword((ev.target as HTMLInputElement).value)}></input>
        <button type='submit'>Register</button>
    </form>
  )
}

export default Register