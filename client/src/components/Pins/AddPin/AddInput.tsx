import { FC } from 'react'

interface ImgProp {
  setImage: (image:string) => any
}

export const AddInput:FC<ImgProp> = ({setImage}) => {
  return (
    <div>
        <input type="text" placeholder='Enter URL' onInput={(ev) => setImage((ev.target as HTMLInputElement).value)}/>
    </div>
  )
}

