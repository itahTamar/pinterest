import { RenderSuggestedBoards } from '../../components/board/addBoard/RenderSuggestedBoards'
import RenderOthersPins from '../../components/Pins/RenderOthersPins'

export const HomePage = () => {

  return (
    <div>
      welcome to home page
      <RenderSuggestedBoards />

      <div>render all other user's Pins</div>
      <RenderOthersPins />

    </div >
  )
}
