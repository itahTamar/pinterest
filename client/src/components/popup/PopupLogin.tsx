import '../../style/popup.css';
import Login from '../user/Login';

const PopupLogin = () => {

    return (
        <div className='popup'>
            <div className='popup-inner'>
                   <Login/>
            </div>
        </div>
    )
}

export default PopupLogin