import { useState } from 'react'
import '../../style/register.css'
import EditProfile from './EditProfile'

//

const Register = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [show, setShow] = useState(false)

    const handleSubmitRegister = async (ev: React.FormEvent<HTMLFormElement>) => {
        try {
            ev.preventDefault()
            const data = { email, password }
            console.log("A handleSubmit register.tsx the data:", data)
            if (!data) throw new Error("register failed - no email or password");
            setShow(true)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <form className="register-form" onSubmit={handleSubmitRegister}>
                <input type='email' name='email' autoComplete='given-name' placeholder='Email' value={email} onInput={(ev) => setEmail((ev.target as HTMLInputElement).value)}></input>
                <input type='password' name='password' autoComplete='off' placeholder='Password' value={password} onInput={(ev) => setPassword((ev.target as HTMLInputElement).value)}></input>
                <button type='submit'>Register</button>
            </form>

            {show ?
                <EditProfile email={email} password={password} />
                : null}
        </>
    )
}

export default Register