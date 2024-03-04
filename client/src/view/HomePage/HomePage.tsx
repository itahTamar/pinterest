import { useContext } from 'react';
import { RenderSuggestedBoards } from '../../components/board/addBoard/RenderSuggestedBoards'
import RenderOthersPins from '../../components/Pins/RenderOthersPins'
import { OtherPinsContext } from '../../contexts/userContext';
import RenderOtherSearchPin from '../../components/Pins/RenderOtherSearchPin';

export const HomePage = () => {
  const { otherPinsSearch } = useContext(OtherPinsContext);

  return (
    <div>
     
      <RenderSuggestedBoards />

      {otherPinsSearch.length>0 ? <RenderOtherSearchPin/> :<RenderOthersPins /> }
      

    </div >
  )
}
