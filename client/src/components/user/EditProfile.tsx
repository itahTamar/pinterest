import React, { FC, useState } from 'react'
import { register } from '../../api/users/userApi'
import { useNavigate } from 'react-router-dom'

interface userDataProp {
  email: string,
  password: string
}

const EditProfile:FC<userDataProp> = ({email, password}) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [about, setAbout] = useState("")
  const [pronouns, setPronouns] = useState("")
  const [website, setWebsite] = useState("")
  const [username, setUsername] = useState("")
  const navigate = useNavigate()

  console.log("At EditProfile the email&password are:", email, password)

  const handleSubmitEditProfile = async (ev: React.FormEvent<HTMLFormElement>) => {
    try {
        ev.preventDefault()
        console.log("At handleSubmitEditProfile the data to send DB:", email, password, firstName, lastName, about, pronouns, website, username)
        if(!email || !password || !firstName || !lastName || !username) throw new Error("At EditProfile Necessary information is missing");
        
        const data = await register(email, password, username, firstName, lastName, about, pronouns, website)
        console.log("At handleSubmitEditProfile data is:" , data)

        if (!data) throw new Error("register failed, please register first");
        navigate("/login")

    } catch (error) {
        console.error(error)
    }
}

  return (
    <div>
      <h1>Edit profile</h1>
      <p>Keep your personal details private. Information you add here is visible to any who can view your profile.</p>
      <label>Photo</label>
      <div>
        <img />
        <button>Change</button>
      </div>

      <form className='editProfileForm' onSubmit={handleSubmitEditProfile}>

        <div className='fullName'>
          <label>First name</label>
          <input type="text" name="firstName" autoComplete='given-name' value={firstName} onInput={(ev) => setFirstName((ev.target as HTMLInputElement).value)}></input>

          <label>Last name</label>
          <input type="text" name="lastName" autoComplete='given-name' value={lastName} onInput={(ev) => setLastName((ev.target as HTMLInputElement).value)}></input>
        </div>

        <label>About</label>
          <input type="text" name="about" autoComplete='given-name' value={about} onInput={(ev) => setAbout((ev.target as HTMLInputElement).value)}></input>

          <label>Pronouns</label>
          <input type="text" name="pronouns" autoComplete='given-name' value={pronouns} onInput={(ev) => setPronouns((ev.target as HTMLInputElement).value)}></input>

          <label>Website</label>
          <input type="text" name="website" autoComplete='given-name' value={website} onInput={(ev) => setWebsite((ev.target as HTMLInputElement).value)}></input>

          <label>Username</label>
          <input type="text" name="username" autoComplete='given-name' value={username} onInput={(ev) => setUsername((ev.target as HTMLInputElement).value)}></input>

          <button type="reset">Reset</button>
          <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default EditProfile
