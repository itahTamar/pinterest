import React from 'react'
import { useParams } from 'react-router-dom'

const boardPage = () => {
const {board_id} = useParams()

  return (
    <div>boardPage
        <h1>title/category</h1><select>... {/*board options in small pupup window (edit, shar, merge. archive)- only the edit will work as popup*/}
                                    <label>Board options</label>
                                    <option >edit</option>
                                    <option>shar</option>
                                    <option>merge</option>
                                    <option>archive</option>
                                </select>
         <button><i>invite collaborators</i></button>  {/*only visual btn */}
         <div>more idea</div><div>organize</div> {/*only visual boxs */}
        <div>
            <h2>num of pin at the page (adjacent to the left)</h2>
            <button>options icon (adjacent to the right)</button>
        </div>
        <div>render all user saved pin in that category</div>
        <div>find some ideas for this boars: (div box with more pin in that category of other users)</div>
        <button>+ to creat a pin or ass a section (in the down-middle of the box)</button>
        <button>?</button> {/*only visual btn */}
    </div>
  )
}

export default boardPage