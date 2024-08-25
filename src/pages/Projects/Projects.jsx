import React, { useState, useEffect, useRef } from 'react';
import { CodeProjects, ResearchProjects } from '../../utils/ProjectData';
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

    const [codingSlide, setCodingSlide] = useState(0);
    const [researchSlide, setResearchSlide] = useState(0);

    const codingIntervalRef = useRef(null);
    const researchIntervalRef = useRef(null);

    const startCodingInterval = () => {
        codingIntervalRef.current = setInterval(() => {
            setCodingSlide(prevSlide => (prevSlide + 1) % 5);
        }, 7000);
    };

    const stopCodingInterval = () => {
        clearInterval(codingIntervalRef.current);
    };

    const startResearchInterval = () => {
        researchIntervalRef.current = setInterval(() => {
            setResearchSlide(prevSlide => (prevSlide + 1) % 1);
        }, 7000);
    };

    const stopResearchInterval = () => {
        clearInterval(researchIntervalRef.current);
    };

    useEffect(() => {
        startCodingInterval();
        startResearchInterval();

        return () => {
            stopCodingInterval();
            stopResearchInterval();
        };
    }, []);

    const currentSlideClass = (slideIndex, currentSlide) => {
        if (slideIndex === currentSlide) return 'enter';
        if (slideIndex === (currentSlide === 0 ? 2 : currentSlide - 1)) return 'exit';
        return 'hidden';
    };

    const handleClick = (index) => {
        setCodingSlide(index);

    };

    const handleResearchClick = (index) => {
        setResearchSlide(index);
    }

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
                        <div className={`projects ${displayType ? 'light' : 'dark'}`} style={{ boxShadow: `0 0 0.5em ${pokeTheme_ONE}` }} onMouseEnter={stopCodingInterval} onMouseLeave={startCodingInterval} >
                            <div className='tabs'>
                                {[0, 1, 2, 3, 4].map(index => (
                                    <button
                                        key={index}
                                        className='tab'
                                        style={{ borderBottom: codingSlide === index ? `2px solid ${pokeTheme_TWO}` : 'none' }}
                                        onClick={() => handleClick(index)}
                                    >
                                        {`${index + 1}`}
                                    </button>
                                ))}
                            </div>
                            <div className='slide-container'>
                                {CodeProjects.map((project, index) => (
                                    <div key={index} className={`slide-content-opacity ${currentSlideClass(index, codingSlide)}`}>
                                        <div className='project-info'>
                                            <a href={project.link} style={{ color: pokeTheme_TWO }} target="_blank" rel="noopener noreferrer">
                                                {project.title}
                                            </a>
                                            <p>{project.desc}</p>
                                            <div className='project-img'>
                                                <p>{project.imgContent}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={`projects ${displayType ? 'light' : 'dark'}`} style={{ boxShadow: `0 0 0.5em ${pokeTheme_ONE}` }} onMouseEnter={stopResearchInterval} onMouseLeave={startResearchInterval} >
                            <div className='tabs'>
                                {[0].map(index => (
                                    <button
                                        key={index}
                                        className='tab'
                                        style={{ borderBottom: researchSlide === index ? `2px solid ${pokeTheme_TWO}` : 'none' }}
                                        onClick={() => handleResearchClick(index)}
                                    >
                                        {`${index + 1}`}
                                    </button>
                                ))}
                            </div>
                            <div className='slide-container'>
                                {ResearchProjects.map((project, index) => (
                                    <div key={index} className={`slide-content-opacity ${currentSlideClass(index, researchSlide)}`}>
                                        <div className='project-info'>
                                            <a href={project.link} style={{ color: pokeTheme_TWO }} target="_blank" rel="noopener noreferrer">
                                                {project.title}
                                            </a>
                                            <p>{project.desc}</p>
                                            <div className='project-img'>
                                                <p>{project.imgContent}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={`projects ${displayType ? 'light' : 'dark'}`} style={{ boxShadow: `0 0 0.5em ${pokeTheme_ONE}` }}>

                        </div>
                    </>
                )}

                {selectedTab === 'Coding' && (
                    <>
                        <div />
                        <div className={`projects ${displayType ? 'light' : 'dark'}`} style={{ boxShadow: `0 0 0.5em ${pokeTheme_ONE}` }} onMouseEnter={stopCodingInterval} onMouseLeave={startCodingInterval} >
                            <div className='tabs'>
                                {[0, 1, 2, 3, 4].map(index => (
                                    <button
                                        key={index}
                                        className='tab'
                                        style={{ borderBottom: codingSlide === index ? `2px solid ${pokeTheme_TWO}` : 'none' }}
                                        onClick={() => handleClick(index)}
                                    >
                                        {`${index + 1}`}
                                    </button>
                                ))}
                            </div>
                            <div className='slide-container'>
                                {CodeProjects.map((project, index) => (
                                    <div key={index} className={`slide-content-opacity ${currentSlideClass(index, codingSlide)}`}>
                                        <div className='project-info'>
                                            <a href={project.link} style={{ color: pokeTheme_TWO }} target="_blank" rel="noopener noreferrer">
                                                {project.title}
                                            </a>
                                            <p>{project.desc}</p>
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
                        <div className={`projects ${displayType ? 'light' : 'dark'}`} style={{ boxShadow: `0 0 0.5em ${pokeTheme_ONE}` }} onMouseEnter={stopResearchInterval} onMouseLeave={startResearchInterval} >
                            <div className='tabs'>
                                {[0].map(index => (
                                    <button
                                        key={index}
                                        className='tab'
                                        style={{ borderBottom: researchSlide === index ? `2px solid ${pokeTheme_TWO}` : 'none' }}
                                        onClick={() => handleResearchClick(index)}
                                    >
                                        {`${index + 1}`}
                                    </button>
                                ))}
                            </div>
                            <div className='slide-container'>
                                {ResearchProjects.map((project, index) => (
                                    <div key={index} className={`slide-content-opacity ${currentSlideClass(index, researchSlide)}`}>
                                        <div className='project-info'>
                                            <a href={project.link} style={{ color: pokeTheme_TWO }} target="_blank" rel="noopener noreferrer">
                                                {project.title}
                                            </a>
                                            <p>{project.desc}</p>
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

                {selectedTab === 'Filler' && (
                    <>
                        <div />
                        <div className={`projects ${displayType ? 'light' : 'dark'}`} style={{ boxShadow: `0 0 0.5em ${pokeTheme_ONE}` }}>
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
