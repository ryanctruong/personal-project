import './skills.css'

import Python from '/images/skills-icons/python.png'
import Java from '/images/skills-icons/java.png'
import C from '/images/skills-icons/c-.png'
import JS from '/images/skills-icons/js.png'
import SQL from '/images/skills-icons/sql.png'
import React from '/images/skills-icons/react.png'
import VueJS from '/images/skills-icons/vuejs.svg'
import PostgreSQL from '/images/skills-icons/postgresql.png'
import MongoDB from '/images/skills-icons/mongodb.png'
import NodeJS from '/images/skills-icons/nodejs.png'
import Kubernetes from '/images/skills-icons/kubernetes.png'
import Docker from '/images/skills-icons/docker.png'
import Postman from '/images/skills-icons/postman-icon.svg'
import GCP from '/images/skills-icons/google-cloud.png'
import PowerBI from '/images/skills-icons/power-bi.svg'

const Skills = () => {
    return (
        <div className='skills-main-box'>
            <div className='s-title'>
                <h2>Skills</h2>
                <p>These are some of my favorite techonolgoies I've worked with</p>
            </div>
            <div className='skills-list'>
                <div className='skills-title'>
                    <h3>Programming Lanuages</h3>
                    <div className='sl-list'>
                        <div className='sl-box'>
                            <div className='sl-icon'><img src={Python}></img></div>
                            <div className='sl-title'>Python</div>
                        </div>
                        <div className='sl-box'>
                            <div className='sl-icon'><img src={Java}></img></div>
                            <div className='sl-title'>Java</div>
                        </div>
                        <div className='sl-box'>
                            <div className='sl-icon'><img src={C}></img></div>
                            <div className='sl-title'>C/C++</div>
                        </div>
                        <div className='sl-box'>
                            <div className='sl-icon'><img src={JS}></img></div>
                            <div className='sl-title'>JavaScript</div>
                        </div>
                        <div className='sl-box'>
                            <div className='sl-icon'><img src={SQL}></img></div>
                            <div className='sl-title'>SQL</div>
                        </div>
                    </div>
                </div>
                <div className='frameworks'>
                    <h3>Libraries / Frameworks / Databases</h3>
                    <div className='sl-list'>
                        <div className='sl-box'>
                            <div className='sl-icon'><img src={React}></img></div>
                            <div className='sl-title'>ReactJS</div>
                        </div>
                        <div className='sl-box'>
                            <div className='sl-icon'><img src={VueJS}></img></div>
                            <div className='sl-title'>Vue</div>
                        </div>
                        <div className='sl-box'>
                            <div className='sl-icon'><img src={PostgreSQL}></img></div>
                            <div className='sl-title'>PostgreSQL</div>
                        </div>
                        <div className='sl-box'>
                            <div className='sl-icon'><img src={MongoDB}></img></div>
                            <div className='sl-title'>MongoDB</div>
                        </div>
                        <div className='sl-box'>
                            <div className='sl-icon'><img src={NodeJS}></img></div>
                            <div className='sl-title'>NodeJS</div>
                        </div>
                    </div>
                </div>
                <div className='tools'>
                    <h3>Tools / Platforms</h3>
                    <div className='sl-list'>
                        <div className='sl-box'>
                            <div className='sl-icon'><img src={Kubernetes} /></div>
                            <div className='sl-title'>Kubernetes</div>
                        </div>
                        <div className='sl-box'>
                            <div className='sl-icon'><img src={Docker} /></div>
                            <div className='sl-title'>Docker</div>
                        </div>
                        <div className='sl-box'>
                            <div className='sl-icon'><img src={Postman} /></div>
                            <div className='sl-title'>Postman</div>
                        </div>
                        <div className='sl-box'>
                            <div className='sl-icon'><img src={GCP} /></div>
                            <div className='sl-title'>GCP</div>
                        </div>
                        <div className='sl-box'>
                            <div className='sl-icon'><img src={PowerBI} /></div>
                            <div className='sl-title'>PowerBI</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;