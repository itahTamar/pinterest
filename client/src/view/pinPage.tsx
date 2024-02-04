import ChatBox from '../components/chatBox/ChatBox';
import '../style/chatBox.css';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import PinCard from '../components/Pins/PinCard';
import { getPinById } from '../api/pins/pinsApi';
import { Pin } from '../types/pin';

const PinPage = () => {
    const [dataPin, setDataPin] = useState<Pin>();
    let { pinId } = useParams();
    const navigate = useNavigate()

    useEffect(() => {

        const specificPin = async () => {
            if (pinId == undefined) throw new Error("the pinId in PinPage is undefined!");
            console.log(pinId)
            try {
                const data: Pin = await getPinById(pinId);
                if (!data) throw new Error("no dog data");
                
                console.log("at specificPin the data:", data);
                setDataPin(data);
            } catch (error) {
                console.error("Error fetching specificPin:", error);
            }
        };

        specificPin();
    }, [pinId]);

    return (
        <div>
            <PinCard key={pinId} pin={dataPin} />
            <ChatBox />
            <button onClick={() => { navigate(`/`) }}>Back</button>
        </div>
    );
};

export default PinPage;
