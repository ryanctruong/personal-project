import './home.css'
import Github from '/images/github.png'
import Linkedin from '/images/linkedin.png'
import Gmail from '/images/gmail.png'

const Home = () => {
    return (
        <div className='home-main-box'>
            <div className='profile-title'>
                <div className='picture common-styles'>
                    <div className='profile-picture'>
                        <img src={''} id='profile-pic'></img>
                    </div>
                </div>
                <div className='basic-desc common-styles'>
                    <ul>
                        <li id='full-name'>Ryan Truong</li>
                        <li id='job-title'>Software Engineer</li>
                        <li id='company'><a href="https://careers.hcahealthcare.com/" target='__blank'>HCA Healthcare</a></li>
                        <li id='university'><a href="https://www.belmont.edu/" target='__blank'>Belmont University</a></li>
                    </ul>
                </div>
                <div className='links common-styles'>
                    <ul>
                        <li className="li-github">
                            <div className="sti_container">
                                <button className="btn">
                                    <span className="btn-icon"><img src={Github} /></span>
                                    <span className="btn-text">Github</span>
                                </button>
                            </div>
                        </li>
                        <li className="li-linkedin">
                            <div className="sti_container">
                                <button className="btn">
                                    <span className="btn-icon"><img src={Linkedin} /></span>
                                    <span className="btn-text">Linkedin</span>
                                </button>
                            </div>
                        </li>
                        <li className="li-gmail">
                            <div className="sti_container">
                                <button className="btn">
                                    <span className="btn-icon"><img src={Gmail} /></span>
                                    <span className="btn-text">Gmail</span>
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='profile-desc'>

            </div>
        </div>
    );
}

export default Home;