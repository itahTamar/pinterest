import { FC } from 'react'
import './AddInput.scss'

interface ImgProp {
  setImage: (image:string) => any
}

export const AddInput:FC<ImgProp> = ({setImage}) => {
  return (
    <div>
        <input className='addinput' type="text" placeholder='Enter URL' onInput={(ev) => setImage((ev.target as HTMLInputElement).value)}/>
    </div>
  )
}

