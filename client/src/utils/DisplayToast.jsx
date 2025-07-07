import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DisplayToast = (message, type = 'info') => {
    toast[type](message, {
        position: 'bottom-center',
        autoClose: 2000,
        pauseOnHover: false,
    });
};

export default DisplayToast;
