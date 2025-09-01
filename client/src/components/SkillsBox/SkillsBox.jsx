const SkillsBox = () => {
    return (
        <div className="flex flex-col justify-center items-center h-full w-full rounded-[50px] gap-8 shadow-[0_0_0.5em_rgba(0,0,0,0.38)] bg-white">
            <h2 className="text-2xl font-bold">Technical Skills</h2>
            <ul className="list-disc list-inside text-lg">
                <li>JavaScript (ES6+)</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>HTML5 & CSS3</li>
                <li>Git & GitHub</li>
                <li>RESTful APIs</li>
                <li>SQL & NoSQL Databases</li>
                <li>Agile Methodologies</li>
                <li>Problem Solving & Debugging</li>
            </ul>
        </div>
    );
}
export default SkillsBox;