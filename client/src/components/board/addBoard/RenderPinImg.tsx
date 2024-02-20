import { FC, useContext, useEffect, useState } from 'react'
import { Pin } from '../../../types/pin'
import { UserContext } from '../../../contexts/userContext'
import { getPinsByCategory } from '../../../api/pins/pinsApi'

//work ok
interface PinProp {
    category: string
}

const RenderPinImg: FC<PinProp> = ({ category }) => {
    const [pinsState, setPins] = useState<Pin[]>([])
    const [filterPinsState, setFilterPins] = useState<Pin[]>([])
    const { user } = useContext(UserContext)

    const handleGetPinsByCategory = async () => {
        try {
            if (!category) throw new Error("at handleGetPinsByCategory there is no category in params");
            console.log("userId at render-suggested-pin:", user.userId)
            //use axios to get the Pin list by userId from DB
            const response = await getPinsByCategory(category, user.username)
            if (!response) throw new Error("No response from axios getPinsByCategory at render suggested pins");
            console.log("At getPinsByCategory the response is:", response)

            //put the list in PinsState and filterPinsState
            setPins(response)
            setFilterPins(response)

        } catch (error) {
            console.error(error)
        }
    }


    useEffect(() => {
        handleGetPinsByCategory()
    }, []) //only run this effect on the initial render

    useEffect(() => {
        console.log("PinsState:", pinsState);  //got it
    }, [pinsState]);

    useEffect(() => {
        console.log("filterPinsState:", filterPinsState);  //got it
    }, [filterPinsState]);

    return (
        <>
            <div className='pins-container'>
                {filterPinsState && pinsState.length > 0 ?
                    (filterPinsState.map((pin) => {
                        return (
                            <div className='pin-card-cover' key={pin.title}>
                                <img src={pin.image}/>
                            </div>
                        )
                    })) : (
                        <p>no pin found</p>
                    )}
            </div>
        </>
    )
}

export default RenderPinImg
