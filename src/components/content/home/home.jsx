import React, { useState, useEffect } from 'react';
import './home.css'
import './home-mq.css'
import ProfilePic from '/beanhead.svg'
import meme from '/images/meme.png'
import dog from '/images/dog-profile-pic.png'
import bear from '/images/brown-bear.jpg'

const weatherAPIKey = import.meta.env.VITE_WEATHER_API_KEY;

const Home = () => {
    const [location, setLocation] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const [temp, setTemp] = useState(0);
    const [condition, setCondition] = useState('');
    const [showWeather, setShowWeather] = useState(true);
    const [easyP, setEasyP] = useState(0);
    const [medP, setMedP] = useState(0);
    const [hardP, setHardP] = useState(0);
    const [setUp, setSetUp] = useState('');
    const [punchline, setPunchline] = useState('');


    useEffect(() => {
        const fetchJoke = async () => {
            try {
                const response = await fetch(`https://official-joke-api.appspot.com/random_joke`, {
                    method: 'GET'
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log(data);
                    setSetUp(data.setup);
                    setPunchline(data.punchline);
                }
            } catch (error) {
                console.log('Error during API call:', error);
            }
        }

        const interval = setInterval(() => {
            fetchJoke();
            setShowWeather(prevShowWeather => !prevShowWeather);
        }, 10000);

        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${weatherAPIKey}&q=Nashville&aqi=no`, {
                    method: 'GET',
                });

                if (response.ok) {
                    const data = await response.json();
                    const location = `${data.location.region}`;
                    const temp = data.current.temp_f;
                    const condition = data.current.condition.text;

                    setLocation(location);
                    setTemp(temp);
                    setCondition(condition);
                } else {
                    console.log('API call failed with status:', response.status);
                }
            } catch (error) {
                console.log('Error during API call:', error);
            }
        };

        const fetchLeetCodeData = async () => {
            try {
                const response = await fetch(`https://leetcode-api-faisalshohag.vercel.app/ryantruong21`, {
                    method: 'GET',
                });

                if (response.ok) {
                    const data = await response.json();
                    const easyP = data.easySolved;
                    const medP = data.totalSubmissions[2].count;
                    const hardP = data.totalSubmissions[3].count;

                    setEasyP(easyP);
                    setMedP(medP);
                    setHardP(hardP);
                } else {
                    console.log('API call failed with status:', response.status);
                }
            } catch (error) {
                console.log('Error during API call:', error);
            }
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

        const intervalId = setInterval(updateTime, 60000);

        return () => clearInterval(intervalId);
    }, []);

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
            </div>
            <div className='profile-detail'>

                <div className="pb-full-desc">
                    <div className="pb-header">
                        <h4>About Me</h4>
                    </div>
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
                    <div className='box1'>
                        <div className='slide-container'>
                            <div className={`slide-content weather-content ${showWeather ? 'enter' : 'exit'}`}>
                                <div className='card'>
                                    <div className='card-icon'>
                                        <img src={dog}></img>
                                    </div>
                                    <div className='card-info'>
                                        <div className='card-title'>
                                            <p>Current Weather</p>
                                        </div>
                                        <p>{currentTime}</p>
                                        <p>{location}</p>
                                        <p>{temp}&deg;F, {condition}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`slide-content hello-content ${showWeather ? 'exit' : 'enter'}`}>
                                <div className='card'>
                                    <div className='card-info'>
                                        <p className='card-title-setup'>{setUp}</p>
                                        <p className='card-subtitle'>{punchline}</p>
                                    </div>
                                    <div className='card-icon'>
                                        <img src={bear}></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='box2'>
                        <div className='leetcode-stats'>
                            <div className='leetcode-title'>
                                <p>LC Problems Solved</p>
                            </div>
                            <p>Easy Solved: <span className='easy'>{easyP}</span></p>
                            <p>Medium Solved: <span className='medium'>{medP}</span></p>
                            <p>Hard Solved: <span className='hard'>{hardP}</span></p>
                        </div>
                        <div className='leetcode-img'>
                            <div className='leetcode-circle'>
                                <img src={meme}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Home;