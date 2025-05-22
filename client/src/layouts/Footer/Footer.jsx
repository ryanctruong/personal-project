import './Footer.css'
import useStore from '../../utils/VariableStore';

const Footer = () => {
    const { displayType } = useStore((state) => ({ displayType: state.displayType }));
    return (
        <div className={`white-bar ${displayType ? 'light' : 'dark'}`}>
            <p>&copy; {new Date().getFullYear()} Created by Ryan Truong. All rights reserved.</p>
        </div>
    )
}

export default Footer;