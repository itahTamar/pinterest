import '../../style/popup.css';
import Login from '../user/Login';

interface PopupLoginProps {
    onClose: () => void;
}

const PopupLogin:React.FC<PopupLoginProps> = ({ onClose }) => {

    return (
        <div className='popup'>
            <div className='popup-inner'>
                   <Login/>
                   <button onClick={onClose}>Close</button>    
            </div>
        </div>
    )
}

export default PopupLogin