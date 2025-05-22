// projectData.js
import jirachi from '/images/projects/jirachi.png';
import octo from '/images/projects/octo.png';

export const CodeProjects = [
    {
        link: "https://github.com/ryanctruong/StuffBay",
        title: "StuffBay",
        desc: "During my first Software Engineering internship, I was tasked with creating a mock-up auction website for internal use. Using HTML, CSS, and Java, I developed a functional and visually appealing prototype. What started as a simple project ended up being well-received, and after my internship ended, the company decided to move forward with building the actual product based on my work. It was a great experience to see my initial design evolve into a real, working solution.",
        imgContent: "IMG / MEME HERE"
    },
    {
        link: "https://github.com/ryanctruong/clippy",
        title: "Clippy",
        desc: "For my first AI project, I teamed up with two others to develop a solution that leveraged NLP techniques to summarize documents. Users could upload a document, and our product would generate a concise summary based on the content. We built everything from scratch in Python, including the GUI, which made the entire process seamless for users. It was an exciting project, and looking back, you could almost say ChatGPT stole our idea!",
        imgContent: "IMG / MEME HERE"
    },
    {
        link: "https://github.com/tony-tomass/CalendarCal",
        title: "CalendarCal",
        desc: "A teammate and I developed a university calendar app to help students track assignments, events, and access tutor information. We built it using Java with a Firebase backend, where I managed the user database, maintained data, and created API calls for data retrieval. The app had nearly 40 active users at the time, and this project set the foundation for my understanding of backend connections and the importance of data management for a smooth user experience.",
        imgContent: "IMG / MEME HERE"
    },
    {
        link: "https://github.com/ryanctruong/PokemonApp",
        title: "PokemonApp",
        desc: "A fun project in my app development class where I explored API integration and learned about UI/UX design. I built a simple app using the Pokémon API to display data about different Pokémon, focusing on creating an intuitive user interface that was both functional and visually appealing. This project gave me hands-on experience in working with APIs, integrating them effectively into an application, and understanding the importance of user experience in app development.",
        imgContent: "IMG / MEME HERE"
    },
    {
        link: "https://github.com/ryanctruong/personal-project",
        title: "Personal Project",
        desc: "This very website! I leveraged my knowledge of web development, including ReactJS, APIs, and DevOps, to create a fun, interactive platform that showcases my skills. It’s designed to give anyone a glimpse into my crazy mind while highlighting my technical abilities. This project allowed me to combine everything I've learned in web development to create something personal and engaging. And yes, it took much longer than I’d like to admit!",
        imgContent: "IMG / MEME HERE"
    }
];

export const ResearchProjects = [
    {
        link: '/personal-project/images/projects/agoa.docx',
        title: 'AGOA on Corruption',
        desc: `I co-authored an economic research paper examining AGOA's impact on corruption levels, which I presented at the 49th IPE Conference in New York City in 2023. The paper is currently being published in academic journals. Our research team consisted of four researchers and our professor, with my role focused on data analysis. I interpreted the data using Stata, developed models to understand our findings, and created visualizations to present the data.`,
        imgContent: ''
    },
    {
        link: 'https://www.belmont.edu/academics/majors-programs/economics/',
        title: 'Independent Reseach',
        desc: `As an economics major, I’ve written multiple research papers on a variety of topics, from supply and demand dynamics to the impact of increased sidewalks on reducing hypertension. These projects allowed me to delve into diverse economic issues and apply theoretical knowledge to real-world scenarios. If you’re interested in any of the research I’ve conducted or would like to discuss these topics further, please don’t hesitate to reach out!`,
        imgContent: ''
    }
];

export const ArtProjects = [
    {
        title: `Jirachi's Cosmic Journey`,
        imgContent: jirachi
    },
    {
        title: `The Joyful Orange Octopus`,
        imgContent: octo
    },
]