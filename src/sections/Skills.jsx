import SkillCard from '../components/SkillCard'

export default function Skills({id}) {
    return (
        <div id={id} className='skills-section section'>
            <h2>Skills</h2>

            <SkillCard heading='Language' hcolor="var(--clr-accent1)" skills={[
               
                { name: 'Java', icon: 'java' },
                { name: 'Python', icon: 'python' },
                { name: 'C', icon: 'c' },
                 { name: 'JavaScript', icon: 'javascript' }
            ]} />

            <SkillCard heading='Backend' hcolor="var(--clr-accent2)" skills={[
                { name: 'Node.js', icon: 'nodejs' },
                { name: 'Express.js', icon: 'express' },
                { name: 'JWT Auth', icon: '/jwt.png' }, // custom icon path
                { name: 'REST API', icon: '/rest-api-icon.png' }, // optional custom icon
            ]} />

            <SkillCard heading='Frontend' hcolor="var(--clr-accent3)" skills={[
                { name: 'HTML', icon: 'html5' },
                { name: 'CSS', icon: 'css3' },
                { name: 'React.js', icon: 'react' },
                { name: 'Redux Toolkit', icon: '/redux-icon.png' }, // custom icon path
                {name:"Tanstack Query",icon:"/react-query.png"},
                { name: 'Bootstrap', icon: '/Bootstrap.png' },
                {name:"Tailwind css",icon:"/tailwindcss.png"}
            ]} />

            <SkillCard heading='Database' hcolor="var(--clr-accent4)" skills={[
                { name: 'MongoDB', icon: 'mongodb' },
                { name: 'Mongoose', icon: '/Mongoose.js.png' }, // custom icon path
                { name: 'MySQL', icon: 'mysql' },             // in case you still use it
             
            ]} />

            <SkillCard heading='Devops' hcolor="var(--clr-accent5)" skills={[
                { name: 'Git', icon: 'git' },
                { name: 'GitHub', icon: 'github' },
               
            ]} />

            <SkillCard heading='Tools' hcolor="var(--clr-accent6)" skills={[
                { name: 'VS Code', icon: 'vscode' },
                { name: 'Postman', icon: 'postman' },
          
            ]} />

            <SkillCard heading='Automation' hcolor="var(--clr-sec)" skills={[
                { name: 'OpenAI', icon: 'https://simpleicons.org/icons/openai.svg' },
                { name: 'Gemini', icon: 'https://simpleicons.org/icons/googlegemini.svg' },
            ]} />
        </div>
    )
}
