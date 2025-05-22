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
                In my free time, I enjoy running and spending most of my evenings convincing my dogs to talk to me. My produest accomplishment is placing <span style={{ color: pokeTheme, fontWeight: 550 }}>102st</span> in my  <span style={{ color: pokeTheme, fontWeight: 550 }}>first marathon</span>!
            </p>
        </>
    )
};


export const DETAIL_DESC = ({ pokeTheme }) => {
    return (
        <>
            <p>
                I am Ryan Truong, a Software Engineer at <span style={{ color: pokeTheme, fontWeight: 550 }}>HCA Healthcare</span>, currently working on the HR Transformation and Analytics team with a particular focus on <span style={{ color: pokeTheme, fontWeight: 550 }}>Advanced Analytics and Innovative Projects</span>. Our team is an integral part of the HRG (Human Resource Group), where we aim to leverage <span style={{ color: pokeTheme, fontWeight: 550 }}>artificial intelligence</span> to enhance and streamline our HR tools, from a full-stack application for generating job descriptions to predictive workforce planning dashboards. Aside from building end-to-end machine learning pipelines in <span style={{ color: pokeTheme, fontWeight: 550 }}>Python</span> and deploying models via <span style={{ color: pokeTheme, fontWeight: 550 }}>GCP’s Vertex AI</span>, I’m leading the charge on new AI tools for HR. I’ve introduced <span style={{ color: pokeTheme, fontWeight: 550 }}>AI agents</span> to automate our PSV checks with the goal of slashing manual processing time by more than 80%, and I’m prototyping an enterprise job recommender to match employees with roles that play to their strengths. Together these projects are set to <span style={{ color: pokeTheme, fontWeight: 550 }}>save HR hundreds of hours annually</span> so they can focus on strategic work that really moves the needle.
            </p>
            <p>
                Before joining HCA Healthcare, I graduated from <span style={{ color: pokeTheme, fontWeight: 550 }}>Belmont University</span> with a <span style={{ color: pokeTheme, fontWeight: 550 }}>Bachelor of Science in Computer Science and Economics</span>. I knew early on that learning both programming and business would give me a leg up in tech, so I signed up for courses like <span style={{ color: pokeTheme, fontWeight: 550 }}>Artificial Intelligence, Econometrics, and Business Forecasting</span>. In those classes, I worked on team projects—building simple predictive models, digging into data, and presenting findings to classmates and professors. Those experiences taught me how to solve real problems and explain technical ideas in plain language. Now at HCA Healthcare, I’m putting both my <span style={{ color: pokeTheme, fontWeight: 550 }}>coding skills and my business background</span> to work every day, and they’ve already made a big difference in what I can achieve.
            </p>
        </>
    )
}