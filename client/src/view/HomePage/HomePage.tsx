import { RenderSuggestedBoards } from '../../components/board/addBoard/RenderSuggestedBoards'
import RenderOthersPins from '../../components/Pins/RenderOthersPins'

export const HomePage = () => {

  return (
    <div>
     
      <RenderSuggestedBoards />

      
      <RenderOthersPins />

    </div >
  )
}
