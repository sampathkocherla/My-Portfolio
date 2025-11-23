import './styles/components.css'
import Dock from "./components/Dock"
import Tooltip from './components/Tooltip'
import './styles/app.css'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Education from './sections/Education'
import Contact from './sections/Contact'
import Project from "./sections/Project.jsx";
import Experience from './sections/Experience.jsx'
import Nav from './components/Nav.jsx'
import { useState } from 'react'
function App() {
    const [isNavVisible, setIsNavVisible] = useState(false);
    return (
        <>
            <Nav isVisible={isNavVisible} />
          <Home id="home" /> {/* Add this too */}
     
            <About id="about" />
            <Experience id="experience" /> {/* ADD ID */}
            <Skills id="skills" />       {/* ADD ID */}
            <Education id="education" />   {/* ADD ID */}
            <Project id="projects" />     {/* ADD ID */}
            <Contact id="contact" />     {/* ADD ID */}
            <Dock 
                toggleNav={() => setIsNavVisible(!isNavVisible)} 
                isNavOpen={isNavVisible} 
            />
            <Tooltip />
        </>
    );
}

export default App