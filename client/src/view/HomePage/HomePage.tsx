import { useContext } from 'react';
import { RenderSuggestedBoards } from '../../components/board/addBoard/RenderSuggestedBoards/RenderSuggestedBoards'
import RenderOthersPins from '../../components/Pins/RenderOthersPins/RenderOthersPins'
import { OtherPinsContext } from '../../contexts/pinsContext';
import RenderOtherSearchPin from '../../components/Pins/search/RenderOtherSearchPin';

export const HomePage = () => {
  const { otherPinsSearch } = useContext(OtherPinsContext);

  return (
    <div>
     
      <RenderSuggestedBoards />

      {otherPinsSearch.length>0 ? <RenderOtherSearchPin/> :<RenderOthersPins /> }
      

    </div >
  )
}
