import './home.css'
import ProfilePic from './images/dog-profile-pic.png'

const Home = () => {
    return (
        <div className='home-main-box'>
            <div className='profile-title'>
                <div className='picture common-styles'>
                    <div className='profile-picture'>
                        <img src={ProfilePic} id='profile-pic'></img>
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
                        <li>
                            <a href="#" class="button">
                                <span class="icon"></span>
                                <span class="text">Github</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="button">
                                <span class="icon"></span>
                                <span class="text">Linkedin</span>
                            </a>
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