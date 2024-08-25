import React, { useState, useEffect, useRef } from 'react';
import { CodeProjects } from '../../utils/ProjectData';
import './Projects.css';

const Projects = ({ displayType, colors }) => {
    const [selectedTab, setSelectedTab] = useState('All');
    const [isTransitioning, setIsTransitioning] = useState(false);

    const pokeTheme_ONE = colors.baseColor;
    const pokeTheme_TWO = colors.complementaryColor;

    const handleTabClick = (tab) => {
        if (selectedTab !== tab) {
            setIsTransitioning(true);
            setTimeout(() => {
                setSelectedTab(tab);
                setIsTransitioning(false);
            }, 300);
        }
    };

    const [leftSlide, setLeftSlide] = useState(0);
    const leftIntervalRef = useRef(null);

    const startLeftInterval = () => {
        leftIntervalRef.current = setInterval(() => {
            setLeftSlide(prevSlide => (prevSlide + 1) % 5);
        }, 7000);
    };

    const stopLeftInterval = () => {
        clearInterval(leftIntervalRef.current);
    };


    useEffect(() => {
        startLeftInterval();

        return () => {
            stopLeftInterval();
        };
    }, []);

    const currentSlideClass = (slideIndex, currentSlide) => {
        if (slideIndex === currentSlide) return 'enter';
        if (slideIndex === (currentSlide === 0 ? 2 : currentSlide - 1)) return 'exit';
        return 'hidden';
    };

    const handleClick = (index) => {
        setLeftSlide(index);
    };

    return (
        <div className="projects-main-box">
            <div className={`projects-category ${displayType ? 'light' : 'dark'}`} style={{ boxShadow: `0 0 0.5em ${pokeTheme_ONE}` }}>
                <p
                    style={{
                        color: pokeTheme_TWO,
                        cursor: 'pointer',
                        borderBottom: selectedTab === 'All' ? `2px solid ${pokeTheme_TWO}` : 'none',
                        fontWeight: selectedTab === 'All' ? `700` : '',
                    }}
                    onClick={() => handleTabClick('All')}
                >
                    All
                </p>
                <p
                    style={{
                        color: pokeTheme_TWO,
                        cursor: 'pointer',
                        borderBottom: selectedTab === 'Coding' ? `2px solid ${pokeTheme_TWO}` : 'none',
                        fontWeight: selectedTab === 'Coding' ? `700` : '',
                    }}
                    onClick={() => handleTabClick('Coding')}
                >
                    Coding Projects
                </p>
                <p
                    style={{
                        color: pokeTheme_TWO,
                        cursor: 'pointer',
                        borderBottom: selectedTab === 'Research' ? `2px solid ${pokeTheme_TWO}` : 'none',
                        fontWeight: selectedTab === 'Research' ? `700` : '',

                    }}
                    onClick={() => handleTabClick('Research')}
                >
                    Research Projects
                </p>
                <p
                    style={{
                        color: pokeTheme_TWO,
                        cursor: 'pointer',
                        borderBottom: selectedTab === 'Filler' ? `2px solid ${pokeTheme_TWO}` : 'none',
                        fontWeight: selectedTab === 'Filler' ? `700` : '',
                    }}
                    onClick={() => handleTabClick('Filler')}
                >
                    Filler Projects
                </p>
            </div>

            <div className={`projects-list ${displayType ? 'light' : 'dark'} ${isTransitioning ? 'hidden' : ''}`}>
                {selectedTab === 'All' && (
                    <>
                        <div className={`coding-projects ${displayType ? 'light' : 'dark'}`} style={{ boxShadow: `0 0 0.5em ${pokeTheme_ONE}` }} onMouseEnter={stopLeftInterval} onMouseLeave={startLeftInterval} >
                            <div className='tabs'>
                                {[0, 1, 2, 3, 4].map(index => (
                                    <button
                                        key={index}
                                        className='tab'
                                        style={{ borderBottom: leftSlide === index ? `2px solid ${pokeTheme_TWO}` : 'none' }}
                                        onClick={() => handleClick(index)}
                                    >
                                        {`${index + 1}`}
                                    </button>
                                ))}
                            </div>
                            <div className='slide-container'>
                                {CodeProjects.map((project, index) => (
                                    <div key={index} className={`slide-content-opacity ${currentSlideClass(index, leftSlide)}`}>
                                        <div className='project-info'>
                                            <a href={project.href} style={{ color: pokeTheme_TWO }} target="_blank" rel="noopener noreferrer">
                                                {project.title}
                                            </a>
                                            <p>{project.description}</p>
                                            <div className='project-img'>
                                                <p>{project.imgContent}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={`research-projects ${displayType ? 'light' : 'dark'}`} style={{ boxShadow: `0 0 0.5em ${pokeTheme_ONE}` }}>

                        </div>

                        <div className={`filler-projects ${displayType ? 'light' : 'dark'}`} style={{ boxShadow: `0 0 0.5em ${pokeTheme_ONE}` }}>

                        </div>
                    </>
                )}

                {selectedTab === 'Coding' && (
                    <>
                        <div />
                        <div className={`coding-projects ${displayType ? 'light' : 'dark'}`} style={{ boxShadow: `0 0 0.5em ${pokeTheme_ONE}` }} onMouseEnter={stopLeftInterval} onMouseLeave={startLeftInterval} >
                            <div className='tabs'>
                                {[0, 1, 2, 3, 4].map(index => (
                                    <button
                                        key={index}
                                        className='tab'
                                        style={{ borderBottom: leftSlide === index ? `2px solid ${pokeTheme_TWO}` : 'none' }}
                                        onClick={() => handleClick(index)}
                                    >
                                        {`${index + 1}`}
                                    </button>
                                ))}
                            </div>
                            <div className='slide-container'>
                                {CodeProjects.map((project, index) => (
                                    <div key={index} className={`slide-content-opacity ${currentSlideClass(index, leftSlide)}`}>
                                        <div className='project-info'>
                                            <a href={project.href} style={{ color: pokeTheme_TWO }} target="_blank" rel="noopener noreferrer">
                                                {project.title}
                                            </a>
                                            <p>{project.description}</p>
                                            <div className='project-img'>
                                                <p>{project.imgContent}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div />
                    </>
                )}

                {selectedTab === 'Research' && (
                    <>
                        <div />
                        <div className={`research-projects ${displayType ? 'light' : 'dark'}`} style={{ boxShadow: `0 0 0.5em ${pokeTheme_ONE}` }}>
                            <p>Research</p>
                        </div>
                        <div />
                    </>
                )}

                {selectedTab === 'Filler' && (
                    <>
                        <div />
                        <div className={`filler-projects ${displayType ? 'light' : 'dark'}`} style={{ boxShadow: `0 0 0.5em ${pokeTheme_ONE}` }}>
                            <p>Filler</p>
                        </div>
                        <div />
                    </>
                )}
            </div>
        </div>
    );
}

export default Projects;
