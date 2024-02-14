import React from 'react'

const EditBoard = () => {

const handleEditBoard = () => {
    //nead board_id
}

const handleChooseImg = () => {
    //give it up
}

const handleDeleteBoard = () => {
    //nead the board_id
}

    return (
        <form onSubmit={handleEditBoard}>
            <h1>Edit your board</h1><button>X (to close the session with no changes saved)</button>
            <label>Board cover</label>
            <input type='image' onClick={ handleChooseImg } /> {/*bisual btn only? (open popup to choose the img from the pin in the board - dont know what it do?)*/}
            <label>Name</label>
            <input className='smallInput' type='text' onInput={() => { }} />
            <label>Description</label>
            <input className='bigInput' type='text' onInput={() => { }} />
            <label>Action</label>
            <a onClick={ handleDeleteBoard }>
                <h3>Delete board</h3>
                <p>You have 7 days to restore a deleted Board. After that, it will be permanently deleted.</p>
            </a>  {/*will open popup window with a worning and 2btns - cancel&delete */}
            <button type='submit'>Done</button>
        </form>
    )
}

export default EditBoard