import '../styles/projects.css'
import ProjectCard, { Holder, Content, Tags, Tag, CardActions } from '../components/ProjectCard'

export default function Project({id}) {
    return (
        <div id={id}className='section projects-section'>
            <h2>Projects</h2>
            <Holder>
                <ProjectCard>
                    <img src={'Stayspot.png'} alt='Trading' />
                    <Content>
                        <h3>Stayspot</h3>
                        <p>  A full-stack rental listing web app that lets users create, edit, and delete property listings with real-time updates. Users can leave reviews, view listings on interactive maps, and manage their own listings securely. Authentication and authorization are handled using Passport.js (local strategy).Fully deployed on Render, enabling real-time interaction and seamless property discovery</p>
                        <Tags>
                            <Tag hashtag="Javascript" />
                            <Tag hashtag="Bootstrap" />
                            <Tag hashtag="Nodejs" />
                            <Tag hashtag="ExpressJs" />
                            <Tag hashtag="MongoDB" />
                             <Tag hashtag="HTML" />
                              <Tag hashtag="CSS" />
                                 <Tag hashtag="Cloudinary" />
                        </Tags>
                    </Content>
                    <CardActions visit="https://stayspot-4jqj.onrender.com/" source="https://github.com/sampathkocherla/StaySpot" />
               </ProjectCard>
               <ProjectCard>
    {/* Make sure to update this image file if needed, e.g., quickshow.png */}
    <img src={'QuickShow.png'} alt='QuickShow booking app' />
    <Content>
        <h3>QuickShow</h3>
        <p>
            A full-stack MERN booking platform featuring real-time seat selection and secure payments via Stripe. 
            It utilizes Clerk for seamless user authentication and automates transactional notifications using Nodemailer 
            and Inngest event-driven pipelines. Optimized with efficient MongoDB schemas and React Hooks, the platform 
            delivers a high-performance, low-latency booking experience.
        </p>
        <Tags>
            <Tag hashtag="React" />
            <Tag hashtag="Node.js" />
            <Tag hashtag="Express.js" />
            <Tag hashtag="MongoDB" />
            <Tag hashtag="Stripe" />
            <Tag hashtag="Clerk" />
            <Tag hashtag="Inngest" />
            <Tag hashtag="Nodemailer" />
        </Tags>
    </Content>
    <CardActions 
        visit="https://booking-ticket-app-omega.vercel.app/" 
        source="https://github.com/sampathkocherla/booking-ticket-app" 
    />
</ProjectCard>
                <ProjectCard>
                    <img src={'chatbot.png'} alt='Premier' />
                    <Content>
                        <h3>Geethanjali College Voice ChatBot</h3>
                        <p>A voice-enabled chatbot built with Flask, JavaScript, HTML, and CSS to assist students with real-time college information, class schedules, and weather updates. Features speech recognition and synthesis, dynamic replies powered by OpenWeatherMap API, and context-aware responses on placements, departments, and campus details. </p>
                        <Tags>
                            <Tag hashtag="Python" />
                            <Tag hashtag="HTML" />
                            <Tag hashtag="CSS" />
                            <Tag hashtag="Javascript" />
                            <Tag hashtag="Flask" />
                        </Tags>
                    </Content>
                    <CardActions visit="https://college-chatbot-lmj4.onrender.com" />
                </ProjectCard>
                {/* <ProjectCard>
                    <img src={'crud.png'} alt='Library' />
                    <Content>
                        <h3>Crud Application</h3>
                        <p> A web-based student record management system built with PHP, MySQL, HTML, and CSS. It allows users to add, edit, update, and delete student data securely using prepared statements. The app features real-time updates, clean UI, and basic validation. Deployed locally using XAMPP for development and testing.</p>
                        <Tags>
                            <Tag hashtag="PHP" />
                            <Tag hashtag="HTML" />
                            <Tag hashtag="CSS" />
                            <Tag hashtag="XAMPP" />
                            <Tag hashtag="MySQL" />
                        </Tags>
                    </Content>
                    <CardActions  source="https://github.com/21R11A0426/crud_app" />
                </ProjectCard> */}
                {/* <ProjectCard>
                    <img src={'portfolio.png'} alt='Portfolio' />
                    <Content>
                        <h3>Chahat's Personal Portfolio</h3>
                        <p>A modern, responsive portfolio website built with React and Vite showcasing my skills, projects, and professional journey. Features include theme toggling, smooth navigation, and custom components.</p>
                        <Tags>
                            <Tag hashtag="JavaScript" />
                            <Tag hashtag="React" />
                            <Tag hashtag="Vite" />
                        </Tags>
                    </Content>
                    <CardActions source="https://github.com/chahatsharma1/chahat-portfolio" />
                </ProjectCard> */}
            </Holder>
        </div>
    )
}