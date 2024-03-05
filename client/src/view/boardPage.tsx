import { useParams } from 'react-router-dom';
import RenderPinImg from '../components/Pins/RenderPinImg';
import RenderSuggestedPin from '../components/Pins/RenderSuggestedPin';

const BoardPage = () => {
  const { boardName } = useParams<string>();
  console.log("at board page the board name:",boardName)

  return (
    <div>boardPage
      <h1>{boardName}</h1><select>... {/*board options in small popup window (edit, shear, merge. archive)- only the edit will work as popup*/}
        <label>Board options</label>
        <option >edit</option>
        <option>shear</option>
        <option>merge</option>
        <option>archive</option>
      </select>
      <button><i>invite collaborators</i></button>  {/*only visual btn */}
      <div>more idea</div><div>organize</div> {/*only visual boxes */}
      <div>
         <h4>num of pin at the page </h4> {/*(adjacent to the left) */}
         <button>options icon </button> {/*(adjacent to the right) */}
      </div>
{/* @ts-ignore */}
      <div><RenderPinImg category={boardName}/></div>
      
      <div>find some ideas for this boars:  {/* (div box with more pin in that category of other users that he yet saved) */}
       {boardName !== undefined ? <RenderSuggestedPin category={boardName}/>: <p>undefined category</p>}
      </div>
      <button>+ </button> {/* only visual btn (in the down-middle of the box)*/}
      <button>?</button> {/*only visual btn */}
    </div>
  )
}

export default BoardPage