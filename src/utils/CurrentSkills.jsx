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

import veryhappy from '/images/memes/veryhappy.gif'
import happy from '/images/memes/happy.gif'
import idk from '/images/memes/idk.gif'
import okay from '/images/memes/okay.gif'
import sad from '/images/memes/sad.gif'

export const CURRENT_SKILLS = {
    languages: [
        {
            name: `Python`, imgSrc: Python, yoe: `~3 years`,
            desc: `I've extensively used Python in my professional work, especially for data analytics and backend processing. From developing AI projects to writing scripts that streamline processes, I’ve done it all.`,
            link: 'https://docs.python.org/3/',
            meme: happy
        },
        {
            name: `Java`, imgSrc: Java, yoe: `~4 years`,
            desc: `Java was the first programming language I learned, providing a solid foundation for my programming skills. It remains my language of choice, and I frequently use it for practicing algorithms and solving problems on LeetCode.`,
            link: 'https://dev.java/learn/',
            meme: veryhappy
        },
        {
            name: `C/C++`, imgSrc: C, yoe: `~1 years`,
            desc: `Though I do not have any professional experience, I am comfortable with C/C++. I’ve used it extensively in academic projects with systems programming, and I enjoy the challenges these languages offer.`,
            link: 'https://learn.microsoft.com/en-us/cpp/?view=msvc-170',
            meme: okay
        },
        {
            name: `JavaScript`, imgSrc: JavaScript, yoe: `~2 years`,
            desc: `One of my favorite languages of all time. I appreciate how it can be used for everything from building websites to creating apps, making it incredibly versatile and useful. Lately, I’ve been using it primarily for web development.`,
            link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            meme: veryhappy
        },
        {
            name: `SQL`, imgSrc: SQL, yoe: `~3 years`,
            desc: `SQL is a language I have used extensively in every professional role, serving as the foundation for managing and maintaining data. I’ve worked for a SQL-focused company and earned the highest grade out of 70 in a dedicated SQL class.`,
            link: 'https://www.w3schools.com/sql/default.asp',
            meme: happy
        }
    ],
    frameworks: [
        {
            name: `ReactJS`, imgSrc: ReactJS, yoe: `~1 year`,
            desc: `I’ve been using ReactJS for about a year in my current role to develop innovate projects that require a frontend that needs to connect to a backend. It’s my go-to for building dynamic, responsive user interfaces.`,
            link: 'https://react.dev/learn',
            meme: happy
        },
        {
            name: `VueJS`, imgSrc: VueJS, yoe: `~1 year`,
            desc: `Like ReactJS, I’ve been working with VueJS for about a year, primarily focusing on frontend development. I use it to maintain and enhance our enterprise website, which manages HR resources and data.`,
            link: 'https://vuejs.org/guide/introduction.html',
            meme: happy
        },
        {
            name: `PostgreSQL`, imgSrc: PostgreSQL, yoe: `~1 year`,
            desc: `In my current role, I use PostgreSQL to manage and store user feedback related to all of our websites. I’ve built an API that efficiently stores and retrieves responses, ensuring reliable data handling and analysis.`,
            link: 'https://www.postgresql.org/docs/current/',
            meme: okay
        },
        {
            name: `MongoDB`, imgSrc: MongoDB, yoe: `~1 year`,
            desc: `In my current role, I use MongoDB to manage and store data for various projects. For instance, I log user login activity across our websites, leveraging MongoDB’s flexibility to efficiently handle large volumes of unstructured data.`,
            link: 'https://www.mongodb.com/docs/',
            meme: idk
        },
        {
            name: `NodeJS`, imgSrc: NodeJS, yoe: `~1 year`,
            desc: `I’ve been using NodeJS for about a year alongside ReactJS in my current role. I use it to build and manage backend services, including maintaining security, optimizing performance, and creating APIs for full-stack applications.`,
            link: 'https://nodejs.org/en/learn/getting-started/introduction-to-nodejs',
            meme: sad
        }
    ],
    tools: [
        {
            name: `Kubernetes`, imgSrc: Kubernetes, yoe: `~1 year`,
            desc: `I’ve been working with Kubernetes for about a year to orchestrate and manage containerized applications. I use it to automate deployment and scaling of Docker containers, including deploying them to GCP.`,
            link: 'https://kubernetes.io/docs/home/',
            meme: sad
        },
        {
            name: `Docker`, imgSrc: Docker, yoe: `~1 year`,
            desc: `I use Docker to containerize applications for deployment and management through Kubernetes and GCP, to automate our deployment processes. I’m fairly new to Docker and will continue to learn more.`,
            link: 'https://docs.docker.com/?_gl=1*52jbmw*_gcl_au*MzYyODMxNDM1LjE3MjMxNDkyNjg.*_ga*MTk0OTMwNDMzMy4xNzIzMTQ5MjY4*_ga_XJWPQMJYHQ*MTcyNDM4NzAzOC4yLjEuMTcyNDM4NzY4NC41OS4wLjA.',
            meme: sad
        },
        {
            name: `Postman`, imgSrc: Postman, yoe: `~1 year`,
            desc: `I’ve been learning and using Postman recently to test our API calls in my current role. I’ve found it easy to use and incredibly helpful for testing APIs before running unit tests, significantly streamlining our development process.`,
            link: 'https://www.postman.com/product/what-is-postman/',
            meme: happy
        },
        {
            name: `GCP`, imgSrc: GCP, yoe: `~1 year`,
            desc: `At my current company, which utilizes GCP extensively, I work with this platform to manage data, streamline processes, and support AI applications. Currently, I’m working on getting my certification in GCP.`,
            link: 'https://cloud.google.com/docs',
            meme: idk
        },
        {
            name: `PowerBI`, imgSrc: PowerBI, yoe: `~2 years`,
            desc: `This was one of the first data analytics tools I have used. I have utilized it in every professional experience, from building detailed reports to completely redesigning our monthly reports. It has proven to be an invaluable tool.`,
            link: 'https://learn.microsoft.com/en-us/power-bi/',
            meme: okay
        }
    ]
};