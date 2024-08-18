import React, { useState, useEffect } from 'react';
import fetchData from '../../utils/apiUtils';
import { SimpleDesc } from './Descriptions';
import { FaExpand } from "react-icons/fa";
import { IconContext } from "react-icons";

import './styles/home.css'
import './styles/profile-card.css'
import './styles/profile-detail.css'
import './styles/profile-box.css'
import './styles/popup.css'

import ProfilePic from '/beanhead.svg'
import meme from '/images/meme.png'
import dog from '/images/dog-profile-pic.png'
import bear from '/images/brown-bear.png'
import coder from '/images/coder.png'
import weather from '/images/weather-man.png'

const weatherAPIKey = import.meta.env.VITE_WEATHER_API_KEY;

const Home = ({ displayType }) => {
    const [location, setLocation] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const [temp, setTemp] = useState(0);
    const [condition, setCondition] = useState('');
    const [leftSlide, setLeftSlide] = useState(0);
    const [rightSlide, setRightSlide] = useState(0);
    const [easyP, setEasyP] = useState(0);
    const [medP, setMedP] = useState(0);
    const [hardP, setHardP] = useState(0);
    const [setUp, setSetUp] = useState('How much money does a skunk have?');
    const [punchline, setPunchline] = useState('Just one scent');
    const [pokeName, setPokeName] = useState('');
    const [pokeIMG, setPokeIMG] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [totalCommits, setTotalCommits] = useState(0);
    const [totalRepos, setTotalRepos] = useState(0);

    useEffect(() => {
        const fetchPokemon = () => {
            const number = Math.floor(Math.random() * 1025) + 1;
            const url = `https://pokeapi.co/api/v2/pokemon/${number}`;

            fetchData(url, (data) => {
                setPokeName(data.name);
                setPokeIMG(data.sprites.other['official-artwork'].front_default);
            });
        };
        fetchPokemon();
    }, []);

    useEffect(() => {
        const fetchGitHubStats = () => {
            const url = `https://api.github.com/users/ryanctruong/repos`;

            fetchData(url, (data) => {
                setTotalRepos(data.length);
            })
        }

        fetchGitHubStats();
    }, []);

    useEffect(() => {
        const fetchCommitsLastWeek = async () => {
            let page = 1;
            let totalCommits = 0;
            let hasMoreCommits = true;

            const lastWeekDate = new Date();
            lastWeekDate.setDate(lastWeekDate.getDate() - 7);
            const since = lastWeekDate.toISOString();

            while (hasMoreCommits) {
                const commitsUrl = `https://api.github.com/repos/ryanctruong/personal-project/commits?page=${page}&per_page=100&since=${since}`;

                await fetchData(commitsUrl, (commitsData) => {
                    totalCommits += commitsData.length;
                    if (commitsData.length < 100) {
                        hasMoreCommits = false;
                    }
                },
                    (error) => {
                        hasMoreCommits = false;
                    }
                );

                page++;
            }

            setTotalCommits(totalCommits);
        };

        fetchCommitsLastWeek();
    }, []);

    useEffect(() => {
        const fetchJoke = () => {
            const url = `https://official-joke-api.appspot.com/random_joke`;

            fetchData(url, (data) => {
                setSetUp(data.setup);
                setPunchline(data.punchline);
            });
        };

        fetchJoke();

        const leftInterval = setInterval(() => {
            setLeftSlide(prevSlide => (prevSlide + 1) % 3);
        }, 4500);

        const rightInterval = setInterval(() => {
            setRightSlide(prevSlide => (prevSlide + 1) % 3);
        }, 7000000);

        return () => {
            clearInterval(leftInterval);
            clearInterval(rightInterval);
        };
    }, []);

    const currentSlideClass = (slideIndex, currentSlide) => {
        if (slideIndex === currentSlide) return 'enter';
        if (slideIndex === (currentSlide === 0 ? 2 : currentSlide - 1)) return 'exit';
        return 'hidden';
    };

    useEffect(() => {
        const fetchWeatherData = () => {
            const url = `https://api.weatherapi.com/v1/current.json?key=${weatherAPIKey}&q=Nashville&aqi=no`;

            fetchData(url, (data) => {
                const location = `${data.location.region}`;
                const temp = data.current.temp_f;
                const condition = data.current.condition.text;

                setLocation(location);
                setTemp(temp);
                setCondition(condition);
            });
        };

        const fetchLeetCodeData = () => {
            const url = `https://leetcode-api-faisalshohag.vercel.app/ryantruong21`;

            fetchData(url, (data) => {
                const easyP = data.easySolved;
                const medP = data.totalSubmissions[2].count;
                const hardP = data.totalSubmissions[3].count;

                setEasyP(easyP);
                setMedP(medP);
                setHardP(hardP);
            });
        };

        const updateTime = () => {
            const now = new Date();

            const datePart = now.toLocaleString('en-US', {
                timeZone: 'America/Chicago',
                month: 'long',
                day: 'numeric'
            });

            const timePart = now.toLocaleString('en-US', {
                timeZone: 'America/Chicago',
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            });

            const formattedDate = `${datePart}, ${timePart}`;

            setCurrentTime(formattedDate);
        };

        fetchWeatherData();
        fetchLeetCodeData();
        updateTime();

        const intervalId = setInterval(updateTime, 30000);

        return () => clearInterval(intervalId);
    }, []);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const style = {
        repos: {
            color: displayType ? "#6FB3D1" : "#89CFF0",
            fontStyle: "italic",
        },
        commits: {
            color: displayType ? "#E598A6" : "#FFB6C1",
            fontStyle: "italic",
        }
    };

    return (
        <div className='home-main-box'>
            <div className={`profile-card ${displayType ? 'light' : 'dark'}`}>
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
            </div>
            <div className='profile-detail'>
                <div className={`pb-full-desc ${displayType ? 'light' : 'dark'}`}>
                    <div className="pb-header">
                        <h4>About Me</h4>
                        <div className='expand-container'>
                            <IconContext.Provider value={{ color: "#696969", className: "expandIcon" }}>
                                <FaExpand size={25} onClick={togglePopup} />
                            </IconContext.Provider>
                        </div>
                    </div>
                    <SimpleDesc />
                </div>
                <div className="pb-lists">
                    <div className={`box1 ${displayType ? 'light' : 'dark'}`}>
                        <div className='slide-container'>
                            <div className={`slide-content ${currentSlideClass(0, leftSlide)}`}>
                                <div className='card weather'>
                                    <div className='card-icon'>
                                        <img src={weather} alt="Dog" />
                                    </div>
                                    <div className='card-info'>
                                        <div className={`card-title ${displayType ? 'light' : 'dark'}`}>
                                            <p>My Current Weather</p>
                                        </div>
                                        <p>{currentTime}</p>
                                        <p>{location}</p>
                                        <p>{temp}&deg;F, {condition}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`slide-content ${currentSlideClass(1, leftSlide)}`}>
                                <div className='card joke'>
                                    <div className='card-info'>
                                        <p className='card-title-setup'>{setUp}</p>
                                        <p className='card-subtitle'>{punchline}</p>
                                    </div>
                                    <div className='card-icon'>
                                        <img src={bear} alt="Bear" />
                                    </div>
                                </div>
                            </div>
                            <div className={`slide-content ${currentSlideClass(2, leftSlide)}`}>
                                <div className='card pokemon'>
                                    <div className='card-icon'>
                                        <img src={pokeIMG}></img>
                                    </div>
                                    <div className='card-info'>
                                        <p className='card-title'>Whoa! This Pokémon looks just like you!</p>
                                        <p className='card-subtitle pokemon-name'>{pokeName}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`box2 ${displayType ? 'light' : 'dark'}`}>
                        <div className='slide-container'>
                            <div className={`slide-content ${currentSlideClass(0, rightSlide)}`}>
                                <div className={`card gh ${displayType ? 'light' : 'dark'}`}>
                                    <div className='card-info'>
                                        <div className={`card-title ${displayType ? 'light' : 'dark'}`}>
                                            <p>Github Stats</p>
                                        </div>
                                        <p># of Repos: <span style={style.repos}>{totalRepos ? totalRepos : "too many"}</span></p>
                                        <p>WTD Commits: <span style={style.commits}>{totalCommits ? totalCommits : "a lot"}</span></p>
                                    </div>
                                    <div className='card-icon cat' onClick={() => window.open('https://www.github.com/ryanctruong', '__blank')} >
                                        <div className='img-container'>
                                            <img src={coder} alt="Icon" />
                                            <p><a href={'https://www.github.com/ryanctruong'} target='__blank'>ryanctruong</a></p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className={`slide-content ${currentSlideClass(1, rightSlide)}`}>
                                <div className='card lc'>
                                    <div className='card-info'>
                                        <div className={`card-title ${displayType ? 'light' : 'dark'}`}>
                                            <p>LC Problems Solved</p>
                                        </div>
                                        <p>Easy Solved: <span className='easy'>{easyP}</span></p>
                                        <p>Medium Solved: <span className='medium'>{medP}</span></p>
                                        <p>Hard Solved: <span className='hard'>{hardP}</span></p>
                                    </div>
                                    <div className='card-icon cat'>
                                        <img src={meme}></img>
                                    </div>
                                </div>
                            </div>
                            <div className={`slide-content ${currentSlideClass(2, rightSlide)}`}>
                                <div className='fill-card'>
                                    <div className='card-icon fill-img'>
                                        <img src={dog} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Home;

// {showPopup && (
//     <div className="overlay">
//         <div className="popup">
//             <div className="popup-inner">
//                 <h4>Popup Title</h4>
//                 <p>This is a popup message.</p>
//                 <button onClick={togglePopup}>Close</button>
//             </div>
//         </div>
//     </div>
// )}