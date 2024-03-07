import { useState } from 'react'
import './../login/login.scss'
import MoreDetails from '../MoreDetails/MoreDetails'

//work ok

const Register = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [show, setShow] = useState(false)

    const handleSubmitRegister = async (ev: React.FormEvent<HTMLFormElement>) => {
        try {
            ev.preventDefault()
            const data = { email, password }
            if (!data) throw new Error("register failed - no email or password");
            setShow(true)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <form className="login-form" onSubmit={handleSubmitRegister}>
                <label >Email</label>
                <input type='email' name='email' autoComplete='given-name' placeholder='Email' value={email} onInput={(ev) => setEmail((ev.target as HTMLInputElement).value)}></input>
                <label >Password</label>
                <input type='password' name='password' autoComplete='off' placeholder='Password' value={password} onInput={(ev) => setPassword((ev.target as HTMLInputElement).value)}></input>
                <button type='submit'>Register</button>
            </form>

            {show ?
                <MoreDetails email={email} password={password} />
                : null}
        </>
    )
}

export default Register