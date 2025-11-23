import { Button1 } from '../components/Buttons'
import Pdf from "../assets/icons/pdf.svg?react";
import SvgIcon from '../components/SvgIcon';

export default function About({id}) {
    return (
        <div id={id} className='about-section section'>
            <h2>About</h2>
          <p>
    I am a dedicated <strong>Full-Stack Developer</strong> currently focused on mastering the <strong>MERN stack</strong> — building dynamic, scalable web applications using MongoDB, Express.js, React, and Node.js. I'm passionate about creating seamless user experiences on the front end while developing efficient, secure APIs and backend logic.
  </p>
  <p>
    Alongside full-stack development, I'm actively exploring the intersection of <strong>AI and web technologies</strong>. From integrating AI-driven features like chatbots and smart recommendations to experimenting with open-source models, I’m fascinated by the potential of intelligent systems in everyday applications.
  </p>
  <p>
    My goal is to not just build applications, but to craft smart, user-centric platforms that can evolve with future technologies. I'm driven by curiosity, collaboration, and the excitement of turning ideas into impactful digital solutions.
  </p>
  <p>Always learning. Always building. 🚀</p>
            <a href="https://drive.google.com/file/d/1ntmNPoOLEFJYrvQysscgGPzLIFWL3MT1/view?usp=sharing" target='_blank'>
                <Button1>
                    <SvgIcon icon={Pdf} />
                    Resume
                </Button1>
            </a>
        </div>
    );
}