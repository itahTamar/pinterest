import { useParams } from 'react-router-dom'

const BoardPage = () => {
  const boardName = useParams()
  console.log("at board page the board name:",boardName)

  return (
    <div>boardPage
      <h1>title/category</h1><select>... {/*board options in small popup window (edit, shear, merge. archive)- only the edit will work as popup*/}
        <label>Board options</label>
        <option >edit</option>
        <option>shear</option>
        <option>merge</option>
        <option>archive</option>
      </select>
      <button><i>invite collaborators</i></button>  {/*only visual btn */}
      <div>more idea</div><div>organize</div> {/*only visual boxes */}
      <div>
        <h2>num of pin at the page (adjacent to the left)</h2>
        <button>options icon (adjacent to the right)</button>
      </div>
      <div>render all user saved pin in that category</div>
      <div>find some ideas for this boars: (div box with more pin in that category of other users)</div>
      <button>+ to create a pin or ass a section (in the down-middle of the box)</button>
      <button>?</button> {/*only visual btn */}
    </div>
  )
}

export default BoardPage