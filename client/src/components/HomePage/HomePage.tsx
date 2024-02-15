import { RenderSuggestedBoards } from '../board/addBoard/RenderSuggestedBoards'
import RenderOthersPins from '../Pins/RenderOthersPins'

export const HomePage = () => {
  
  return (
    <div>
      welcome to home page
      <RenderSuggestedBoards/>

      <div>render all other user's Pins</div>
      <RenderOthersPins/>

    </div>
  )
}
