import './Footer.css'

const Footer = ({ displayType }) => {
    return (
        <div className={`white-bar ${displayType ? 'light' : 'dark'}`}>
            <p>&copy; 2024 Created by Ryan Truong. All rights reserved.</p>
        </div>
    )
}

export default Footer;