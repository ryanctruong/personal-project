import React, { useEffect, useState } from 'react';
import { CURRENT_SKILLS } from '../../utils/CurrentSkills';

import './styles/skills.css'

const Skills = ({ selectedTab, displayType, colors }) => {
    const [skillsChunk1, setSkillsChunk1] = useState([]);
    const [skillsChunk2, setSkillsChunk2] = useState([]);
    const [selectedSkill, setSelectedSkill] = useState(null);
    const pokeTheme_ONE = colors.baseColor;
    const pokeTheme_TWO = colors.complementaryColor;

    function getRandomizedSkills(CURRENT_SKILLS) {
        const allSkills = [
            ...CURRENT_SKILLS.languages,
            ...CURRENT_SKILLS.frameworks,
            ...CURRENT_SKILLS.tools
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

    useEffect(() => {
        if (selectedTab === 1) {
            const randomizedSkills = getRandomizedSkills(CURRENT_SKILLS);
            const [chunk1, chunk2] = splitArrayIntoTwoChunks(randomizedSkills);
            setSkillsChunk1(chunk1);
            setSkillsChunk2(chunk2);
        }
    }, [selectedTab]);


    const handleSkillClick = (skill) => {
        setSelectedSkill(skill);
    };

    return (
        <div className='skills-main-box'>
            <div className='skill-list' style={{ boxShadow: `0 0 0.5em ${pokeTheme_ONE}` }}>
                <div className={`skill-header ${displayType ? 'light' : 'dark'}`}>
                    <h4>Current Tech Stack and Resources</h4>
                </div>
                <div className='skill-icons'>
                    {skillsChunk1.map(skill => (
                        <div
                            key={skill.name}
                            className={`skill-item ${displayType ? 'light' : 'dark'}`}
                            style={{ boxShadow: selectedSkill?.name === skill.name ? `0 0 1rem ${pokeTheme_TWO}` : '' }}
                            onClick={() => handleSkillClick(skill)}
                        >
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
                <div className={`text-detail ${displayType ? 'light' : 'dark'}`} style={{ boxShadow: `0 0 0.5em ${pokeTheme_ONE}` }}>
                    <div className={`skill-header ${displayType ? 'light' : 'dark'}`}>
                        <h4>Usage</h4>
                    </div>
                    <div className={`usage-example ${displayType ? 'light' : 'dark'}`}>
                        {selectedSkill ? <p>{selectedSkill.name}</p> : <p>Select a skill to see details</p>}
                    </div>
                </div>
                <div className={`code-detail ${displayType ? 'light' : 'dark'}`} style={{ boxShadow: `0 0 0.5em ${pokeTheme_ONE}` }}>
                    <div className={`skill-header ${displayType ? 'light' : 'dark'}`}>
                        <h4>Example Usage</h4>
                    </div>
                    <div className={`code-example ${displayType ? 'light' : 'dark'}`}>
                        {selectedSkill ? <p>{selectedSkill.name}</p> : <p>Select a skill to see details</p>}
                    </div>
                </div>
            </div>

            <div className='skill-list' style={{ boxShadow: `0 0 0.5em ${pokeTheme_ONE}` }}>
                <div className={`skill-header ${displayType ? 'light' : 'dark'}`}>
                    <h4>Current Tech Stack and Resources</h4>
                </div>
                <div className='skill-icons'>
                    {skillsChunk2.map(skill => (
                        <div
                            key={skill.name}
                            className={`skill-item ${displayType ? 'light' : 'dark'}`}
                            style={{ boxShadow: selectedSkill?.name === skill.name ? `0 0 1rem ${pokeTheme_TWO}` : '' }}
                            onClick={() => handleSkillClick(skill)}
                        >
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
};

export default Skills;
