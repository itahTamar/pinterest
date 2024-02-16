import ChatBox from '../components/chatBox/ChatBox';
import '../style/chatBox.css';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import PinCard from '../components/Pins/PinCard';
import { getPinById } from '../api/pins/pinsApi';
import { Pin } from '../types/pin';
import RenderSuggestedPin from '../components/Pins/RenderSuggestedPin';

const PinPage = () => {
    const [dataPin, setDataPin] = useState<Pin>();
    let { pin_id } = useParams();
    const navigate = useNavigate()

    useEffect(() => {

        const specificPin = async () => {
            if (pin_id == undefined) throw new Error("the pin_id in PinPage is undefined!");
            console.log("at specificPin the pin_id", pin_id)
            try {
                const data: Pin = await getPinById(pin_id);
                if (!data) throw new Error("no dog data");

                console.log("at specificPin the data:", data);
                setDataPin(data);
            } catch (error) {
                console.error("Error fetching specificPin:", error);
            }
        };

        specificPin();
    }, [pin_id]);

    return (
        <>
            <div>
                <PinCard key={pin_id} pin={dataPin} />
                <ChatBox />
                <button onClick={() => { navigate(-1) }}>Back</button>
            </div>
            {/* <RenderSuggestedPin /> */}
        </>
    );
};

export default PinPage;
