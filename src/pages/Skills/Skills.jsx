import React, { useEffect, useState } from 'react';

import './styles/skills.css'

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

const Skills = ({ selectedTab, displayType, colors }) => {
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

    function getRandomizedSkills(categories) {
        const allSkills = [
            ...categories.languages,
            ...categories.frameworks,
            ...categories.tools
        ];

        for (let i = allSkills.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allSkills[i], allSkills[j]] = [allSkills[j], allSkills[i]];
        }

        return allSkills;
    }

    function splitArrayIntoTwoChunks(array) {
        const half = Math.ceil(array.length / 2);
        const firstChunk = array.slice(0, half);
        const secondChunk = array.slice(half);

        return [firstChunk, secondChunk];
    }

    const pokeTheme_ONE = colors.baseColor;
    const pokeTheme_TWO = colors.complementaryColor;
    const [skillsChunk1, setSkillsChunk1] = useState([]);
    const [skillsChunk2, setSkillsChunk2] = useState([]);

    useEffect(() => {
        if (selectedTab === 1) {
            const randomizedSkills = getRandomizedSkills(categories);
            const [chunk1, chunk2] = splitArrayIntoTwoChunks(randomizedSkills);
            setSkillsChunk1(chunk1);
            setSkillsChunk2(chunk2);
        }
    }, [selectedTab]);


    return (
        <div className='skills-main-box'>
            <div className='skill-list'
                style={{ boxShadow: `0 0 0.5em ${pokeTheme_ONE}` }}
            >
                <div className={`skill-header ${displayType ? 'light' : 'dark'}`} >
                    <h4>Current Tech Stack and Resources</h4>
                </div>
                <div className='skill-icons'>
                    {skillsChunk1.map(skill => (
                        <div key={skill.name} className={`skill-item ${displayType ? 'light' : 'dark'}`}>
                            <img
                                src={skill.imgSrc}
                                alt={skill.name}
                                title={skill.name}
                                className="skill-icon"
                            />
                            <p className={`skill-name ${displayType ? 'light' : 'dark'}`}>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='skill-detail'>
                <div className='text-detail'
                    style={{ boxShadow: `0 0 0.5em ${pokeTheme_ONE}` }}
                >
                    <div className={`skill-header ${displayType ? 'light' : 'dark'}`} >
                        <h4>Usage</h4>
                    </div>
                </div>
                <div className='code-detail'
                    style={{ boxShadow: `0 0 0.5em ${pokeTheme_ONE}` }}
                >
                    <div className={`skill-header ${displayType ? 'light' : 'dark'}`} >
                        <h4>Example Usage</h4>
                    </div>
                </div>
            </div>
            <div className='skill-list'
                style={{ boxShadow: `0 0 0.5em ${pokeTheme_ONE}` }}
            >
                <div className={`skill-header ${displayType ? 'light' : 'dark'}`} >
                    <h4>Current Tech Stack and Resources</h4>
                </div>
                <div className='skill-icons'>
                    {skillsChunk2.map(skill => (
                        <div key={skill.name} className={`skill-item ${displayType ? 'light' : 'dark'}`}>
                            <img
                                src={skill.imgSrc}
                                alt={skill.name}
                                title={skill.name}
                                className="skill-icon"
                            />
                            <p className={`skill-name ${displayType ? 'light' : 'dark'}`}>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
