import { ChangeEvent, useContext, useState } from 'react'
import { UserContext } from '../../../contexts/userContext';
import { addOneBoard } from '../../../api/boards/boardApi';

const AddBoard = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [title, setTitle] = useState("")
    const { user } = useContext(UserContext)

    if (!user) throw new Error("at AddBoard there is no user in context");

    // Function to handle checkbox change
    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };

    const handleAddBoard = async () => {
        try {
            if (!user.userId) throw new Error("at handleAddBoard there is no userId in context");
            if (!title || title === '') throw new Error("missing title at handleAddBoard");
            
            const response = await addOneBoard(user.userId, title)
            if (!response) throw new Error("No response from axios addOneBoard");
            console.log("At addOneBoard the response is:", response)
            
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <form onSubmit={handleAddBoard}>
            <h1>Create board</h1>
            <label>Name</label>
            <input type='text' onInput={(ev) => setTitle((ev.target as HTMLInputElement).value)}/>
            <label>
                <input type='checkbox' checked={isChecked} onChange={handleCheckboxChange} />
                <h3>Keep this board secret</h3>
                <p>So only you and collaborators can see it. <li>Learn more</li></p>
            </label>
            <button type='submit'>Create</button>
        </form>
    )
}

export default AddBoard