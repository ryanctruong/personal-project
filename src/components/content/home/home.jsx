import './home.css'
import ProfilePic from '/images/dog-profile-pic.png'
import Github from '/images/github.png'
import Linkedin from '/images/linkedin.png'
import Gmail from '/images/gmail.png'

const Home = () => {
    return (
        <div className='home-main-box'>
            <div className='profile-card'>
                <div className='picture'>
                    <div className='picture-container'>
                        <img src={ProfilePic} id='profile-pic'></img>
                    </div>
                </div>
                <div className='basic-desc'>
                    <ul>
                        <li id='full-name'>Ryan Truong</li>
                        <li id='job-title'>Software Engineer</li>
                        <li id='company'><a href="https://hcahealthcare.com/" target='__blank'>HCA Healthcare</a></li>
                        <li id='university'><a href="https://www.belmont.edu/" target='__blank'>Belmont University</a></li>
                    </ul>
                </div>
                <div className='social-media'>
                    <ul>
                        <li className="li-github">
                            <div className="sti_container">
                                <button className="social-media-btn" onClick={() => window.open("https://github.com/ryanctruong", "_blank", "noopener,noreferrer")}>
                                    <span className="social-media-icon"><img src={Github} alt="Github Icon" /></span>
                                    <span className="social-media-text">Github</span>
                                </button>
                            </div>
                        </li>
                        <li className="li-linkedin">
                            <div className="sti_container">
                                <button className="social-media-btn" onClick={() => window.open("https://www.linkedin.com/in/ryanctruong/", "_blank", "noopener,noreferrer")}>
                                    <span className="social-media-icon"><img src={Linkedin} /></span>
                                    <span className="social-media-text">Linkedin</span>
                                </button>
                            </div>
                        </li>
                        <li className="li-gmail">
                            <div className="sti_container">
                                <button className="social-media-btn" onClick={() => window.location.href = "mailto:rtruong.cs@gmail.com"}>
                                    <span className="social-media-icon"><img src={Gmail} alt="Gmail Icon" /></span>
                                    <span className="social-media-text">Gmail</span>
                                </button>
                            </div>

                        </li>
                    </ul>
                </div>
            </div>
            <div className='profile-detail'>
                <div className="pb-header">
                    <p>About Me</p>
                </div>
                <div className="pb-full-desc">
                    <p>
                        I am Ryan Truong, a Software Engineer at <a href={''} id='text-link'>HCA Healthcare</a>, currently contributing to the HR Transformation and Analytics team, with a particular focus on Advanced Analytics and Innovative Projects.
                    </p>
                    <p>
                        I completed my Bachelor's degree at <a href={''} id='text-link'>Belmont University</a>, earning dual degrees in Computer Science and Economics. During my time there, I developed a strong foundation in both technical and analytical skills, which have been instrumental in my professional career. My academic journey included various projects and internships that provided hands-on experience and deepened my understanding of the practical applications of these fields.
                    </p>
                    <p>
                        Some of my hobbies include participating in various sports, exploring and trying amazing food, and stepping out of my comfort zone to embrace new challenges and experiences.
                    </p>
                </div>
                <div className="pb-lists">
                </div>
            </div>
        </div >
    );
}

export default Home;