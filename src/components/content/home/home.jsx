import React, { useState, useEffect } from 'react';
import { fetchData } from '../../../util/apiUtils';

import './home.css'
import './home-mq.css'

import ProfilePic from '/beanhead.svg'
import meme from '/images/meme.png'
import dog from '/images/dog-profile-pic.png'
import bear from '/images/brown-bear.jpg'
import coder from '/images/coder.jpg'

const weatherAPIKey = import.meta.env.VITE_WEATHER_API_KEY;

const Home = () => {
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
    const [repos, setRepos] = useState([]);

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

    function randomIndex(length, count) {
        const indices = new Set();
        while (indices.size < count) {
            indices.add(Math.floor(Math.random() * length));
        }
        return Array.from(indices);
    }

    useEffect(() => {
        const fetchGitHubStats = () => {
            const url = `https://api.github.com/users/ryanctruong/repos`;

            fetchData(url, (data) => {
                const uniqueIndices = randomIndex(data.length, 3);
                const selectedRepos = uniqueIndices.map(index => ({
                    name: data[index].name,
                    html_url: data[index].html_url,
                }));
                setRepos(selectedRepos);
            })
        }

        fetchGitHubStats();
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
        }, 4000);

        const rightInterval = setInterval(() => {
            setRightSlide(prevSlide => (prevSlide + 1) % 3);
        }, 5500);

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
                            <div className={`slide-content ${currentSlideClass(0, leftSlide)}`}>
                                <div className='card'>
                                    <div className='card-icon'>
                                        <img src={dog} alt="Dog" />
                                    </div>
                                    <div className='card-info'>
                                        <div className='card-title'>
                                            <p>My Current Weather</p>
                                        </div>
                                        <p>{currentTime}</p>
                                        <p>{location}</p>
                                        <p>{temp}&deg;F, {condition}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`slide-content ${currentSlideClass(1, leftSlide)}`}>
                                <div className='card'>
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
                                <div className='card'>
                                    <div className='card-icon'>
                                        <img src={pokeIMG}></img>
                                    </div>
                                    <div className='card-info'>
                                        <p className='card-title'>Whoa! This Pokémon looks just like you!</p>
                                        <p className='card-subtitle pokemon'>{pokeName}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='box2'>
                        <div className='slide-container'>
                            <div className={`slide-content ${currentSlideClass(0, rightSlide)}`}>
                                <div className='card lc'>
                                    <div className='card-info'>
                                        <div className='card-title'>
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
                            <div className={`slide-content ${currentSlideClass(1, rightSlide)}`}>
                                <div className='card gh'>
                                    <div className='card-info'>
                                        <div className='card-title'>
                                            <p>Github Repos</p>
                                        </div>
                                        {/* api will not return 0, delayed api fetch */}
                                        {repos.length > 0 && repos[0] && (
                                            <p><a href={repos[0].html_url} target='__blank'>{repos[0].name}</a></p>
                                        )}
                                        {repos.length > 1 && repos[1] && (
                                            <p><a href={repos[1].html_url} target='__blank'>{repos[1].name}</a></p>
                                        )}
                                        {repos.length > 2 && repos[2] && (
                                            <p><a href={repos[2].html_url} target='__blank'>{repos[2].name}</a></p>
                                        )}
                                    </div>
                                    <div className='card-icon cat'>
                                        <img src={coder} alt="Icon" />

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