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
                I am Ryan Truong, a Software Engineer at <a href={''} id='text-link' style={{ color: pokeTheme }}>HCA Healthcare</a>, currently contributing to the HR Transformation and Analytics team, with a particular focus on Advanced Analytics and Innovative Projects. I am an integral member of the HRG (Human Resource Group), where we aim to leverage artificial intelligence to enhance and streamline our HR tools. In these initiatives, my role primarily involves full-stack engineering, utilizing a tech stack that includes <i style={{ color: pokeTheme, fontWeight: 550 }}>VueJS, ReactJS, Python, and DevOps tools such as Kubernetes and Docker</i>. My work is dedicated to developing and optimizing solutions that drive both efficiency and innovation within our HR systems. Outside of these projects, I am responsible in building and maintaining our enterprise-wide website, which serves as a central hub for information on our work and HR resources.
            </p>
            <p>
                I recently graduated from <a href={''} id='text-link' style={{ color: pokeTheme }}>Belmont University</a> with dual Bachelor's degrees in Computer Science and Economics, graduating <i style={{ color: pokeTheme, fontWeight: 550 }}>magna cum laude</i>. My academic journey gave me a solid foundation in both technical and analytical skills. I had the opportunity to dive deep into Computer Science through courses in artificial intelligence, algorithms, and hardware systems, where I worked extensively with <i style={{ color: pokeTheme, fontWeight: 550 }}>Python, C/C++, and Java</i>. Beyond the typical software engineering track, I also explored the data and business aspects of Computer Science, which broadened my perspective on how the solutions I build can support and drive business goals. Along the way, I completed various projects and internships that allowed me to put this knowledge into practice. Looking ahead, I'm excited to bring this diverse skill set to new challenges, aiming to do work that has true meaning and make a significant impact in any field.
            </p>
        </>
    )
}