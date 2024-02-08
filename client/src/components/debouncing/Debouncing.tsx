import { useEffect, useState } from 'react'
import { Pin } from '../../types/pin';

const Debouncing = ({setFilterPins, pinsState}: any) => {
    const [textSearch, setTextSearch] = useState('')

    if (pinsState === undefined) throw new Error("At debouncing the pinState is undefined");

    const handleFilter = () => {
        if (!textSearch) {
            setFilterPins(pinsState)  //if no search show all pins
        } else { 
            setFilterPins(pinsState.filter((pin:Pin) => 
            pin.title.includes(textSearch)             
            ))
        }
    }

    useEffect(() => {
      if (!textSearch) {
        setFilterPins(pinsState)
      } else {
        const request = setTimeout(handleFilter, 2000)
        return () => clearTimeout(request)
      }
    },[textSearch])

  return (
    <div>
      <input type="text" value={textSearch} onInput={(ev) => setTextSearch((ev.target as HTMLInputElement).value)} placeholder='search a pin'/>
    </div>
  )
}

export default Debouncing