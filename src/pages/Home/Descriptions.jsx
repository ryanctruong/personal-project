import './styles/profile-detail.css'

export const SIMPLE_DESC = ({ pokeTheme }) => {
    return (
        <>
            <p>
                I am Ryan Truong, a Software Engineer at <a href={''} id='text-link' style={{ color: pokeTheme }}>HCA Healthcare</a>, currently contributing to the HR Transformation and Analytics team, with a particular focus on Advanced Analytics and Innovative Projects.
            </p>
            <p>
                I completed my Bachelor's degree at <a href={''} id='text-link' style={{ color: pokeTheme }}>Belmont University</a>, earning dual degrees in Computer Science and Economics. During my time there, I developed a strong foundation in both technical and analytical skills, which have been instrumental in my professional career. My academic journey included various projects and internships that provided hands-on experience and deepened my understanding of the practical applications of these fields.
            </p>
            <p>
                Some of my hobbies include participating in various sports, exploring and trying amazing food, and stepping out of my comfort zone to embrace new challenges and experiences.
            </p>
        </>
    )
};


export const DETAIL_DESC = ({ pokeTheme }) => {
    return (
        <>
            <p>
                I am Ryan Truong, a Software Engineer at <a href={''} id='text-link' style={{ color: pokeTheme }}>HCA Healthcare</a>, currently contributing to the HR Transformation and Analytics team, with a particular focus on Advanced Analytics and Innovative Projects. I am an integral member of the HRG (Human Resource Group), where we aim to leverage artificial intelligence to enhance and streamline our HR tools. In these initiatives, my role primarily involves full-stack engineering, utilizing a tech stack that includes <strong><i>Vite, ReactJS, Python, and DevOps tools such as Kubernetes and Docker</i></strong>. My work is dedicated to developing and optimizing solutions that drive both efficiency and innovation within our HR systems. Outside of these projects, I am responsible in building and maintaining our enterprise-wide website, which serves as a central hub for information on our work and HR resources.
            </p>
            <p>
                I am a recent graduate from <a href={''} id='text-link' style={{ color: pokeTheme }}>Belmont University</a>, where I earned dual Bachelor's degrees in Computer Science and Economics, graduating <i>magna cum laude</i>. My academic experience provided a strong foundation in both technical and analytical skills. During my studies, I completed various projects and internships that applied this knowledge practically. For example, in one internship, I developed a forecasting model using <strong><i>Python and SQL</i></strong> that reduced the processing time for financial projections from one month to under a week, significantly improving both efficiency and accuracy. These projects and experiences honed my skills in data analysis, algorithm development, and database management. I am eager to leverage this background as I embark on my professional career, ready to tackle complex challenges and contribute effectively to any team.
            </p>
        </>
    )
}