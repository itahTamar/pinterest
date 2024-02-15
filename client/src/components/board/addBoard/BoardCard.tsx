import { FC } from 'react'
import { Board } from '../../../types/board'

interface BoardProp {
  board: Board | undefined;
}

const BoardCard: FC<BoardProp> = ({ board }) => {
  return (
    <>
      {board != undefined ?
        <div className='board-card'>
          here i need to render the board's pins by their category

        </div>

        :
        <p>board undefine</p>
      }
    </>
  )
}

export default BoardCard