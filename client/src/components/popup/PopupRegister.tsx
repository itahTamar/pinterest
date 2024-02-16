import '../../style/popup.css';
import Register from '../user/Register';

interface PopupLoginProps {
    onClose: () => void;
}

const PopupRegister:React.FC<PopupLoginProps> = ({onClose}) => {

    return (
        <div className='popup'>
            <div className='popup-inner'>
                   <Register/>
                   <button onClick={onClose}>Close</button>    

            </div>
        </div>
    )
}

export default PopupRegister