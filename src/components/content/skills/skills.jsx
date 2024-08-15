import React, { useEffect, useState, useCallback } from 'react';

import './skills.css'
import './skills-mq.css'

import Python from '/images/skills-icons/python.png'
import Java from '/images/skills-icons/java.png'
import C from '/images/skills-icons/c-.png'
import JavaScript from '/images/skills-icons/js.png'
import SQL from '/images/skills-icons/sql.png'
import ReactJS from '/images/skills-icons/react.png'
import VueJS from '/images/skills-icons/vue-js.svg'
import PostgreSQL from '/images/skills-icons/postgresql.png'
import MongoDB from '/images/skills-icons/mongodb.png'
import NodeJS from '/images/skills-icons/nodejs.png'
import Kubernetes from '/images/skills-icons/kubernetes.png'
import Docker from '/images/skills-icons/docker.png'
import Postman from '/images/skills-icons/postman-icon.svg'
import GCP from '/images/skills-icons/google-cloud.png'
import PowerBI from '/images/skills-icons/power-bi.svg'

const Skills = ({ selectedTab }) => {
    const [shuffledLanguages, setShuffledLanguages] = useState([]);
    const [shuffledFrameworks, setShuffledFrameworks] = useState([]);
    const [shuffledTools, setShuffledTools] = useState([]);

    const shuffleArray = (array) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    const shuffleAndSet = useCallback(() => {
        setShuffledLanguages(shuffleArray(categories.languages));
        setShuffledFrameworks(shuffleArray(categories.frameworks));
        setShuffledTools(shuffleArray(categories.tools));
    }, []);

    useEffect(() => {
        shuffleAndSet();
    }, [shuffleAndSet]);

    useEffect(() => {
        if (selectedTab === 1) {
            shuffleAndSet();
        }
    }, [selectedTab, shuffleAndSet]);

    const categories = {
        languages: [
            { name: 'Python', imgSrc: Python },
            { name: 'Java', imgSrc: Java },
            { name: 'C/C++', imgSrc: C },
            { name: 'JavaScript', imgSrc: JavaScript },
            { name: 'SQL', imgSrc: SQL }
        ],
        frameworks: [
            { name: 'ReactJS', imgSrc: ReactJS },
            { name: 'VueJS', imgSrc: VueJS },
            { name: 'PostgreSQL', imgSrc: PostgreSQL },
            { name: 'MongoDB', imgSrc: MongoDB },
            { name: 'NodeJS', imgSrc: NodeJS }
        ],
        tools: [
            { name: 'Kubernetes', imgSrc: Kubernetes },
            { name: 'Docker', imgSrc: Docker },
            { name: 'Postman', imgSrc: Postman },
            { name: 'GCP', imgSrc: GCP },
            { name: 'PowerBI', imgSrc: PowerBI }
        ]
    };

    return (
        <div className='skills-main-box'>
            <div className='smb-details'>
                <div className='smb-details-box'>
                    <div className='smb-details-title'>
                        <h4>Programming</h4>
                    </div>
                    <div className='smb-details-cards'>
                        {shuffledLanguages.map((language, index) => (
                            <div className='sl-box' key={index}>
                                <div className='sl-icon'>
                                    <img src={language.imgSrc} alt={language.name} />
                                </div>
                                <div className='sl-title'>{language.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='smb-details-box'>
                    <div className='smb-details-title'>
                        <h4>Frameworks</h4>
                    </div>
                    <div className='smb-details-cards'>
                        {shuffledFrameworks.map((framework, index) => (
                            <div className='sl-box' key={index}>
                                <div className='sl-icon'>
                                    <img src={framework.imgSrc} alt={framework.name} />
                                </div>
                                <div className='sl-title'>{framework.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='smb-details-box'>
                    <div className='smb-details-title'>
                        <h4>Tools</h4>
                    </div>
                    <div className='smb-details-cards'>
                        {shuffledTools.map((tool, index) => (
                            <div className='sl-box' key={index}>
                                <div className='sl-icon'>
                                    <img src={tool.imgSrc} alt={tool.name} />
                                </div>
                                <div className='sl-title'>{tool.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
