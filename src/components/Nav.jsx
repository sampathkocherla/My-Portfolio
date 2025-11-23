import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ThemeToggle from "../components/ThemeToggle";
import DockButton from "./DockButton";
import SvgIcon from "./SvgIcon";

// Icons
import Github from "../assets/icons/github.svg?react";
import Linkedin from "../assets/icons/linkedin.svg?react";
import Mail from "../assets/icons/mail.svg?react";
import Computer from '../assets/icons/computer-laptop-hotspot-icon.svg?react';
import Info from "../assets/icons/icons8-about.svg?react";
import BriefCase from '../assets/icons/briefcase-icon.svg?react';
import Book from "../assets/icons/book-icon.svg?react";
import Skills from "../assets/icons/productivity-expert-icon.svg?react";
import EyeOff from "../assets/icons/eye-close-svgrepo-com.svg?react";
import EyeOpen from "../assets/icons/eye-closed-svgrepo-com.svg?react";
// Icons for the Toggle Button
// (You can replace these with your own SVGs if you prefer)


const Nav = ({ isVisible,...props }) => {
  

    // Helper to scroll smoothly when button (or label) is clicked
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
           <div className={`nav ${!isVisible ? 'nav-hidden' : ''}`} {...props} >
            
            <DockButton label="About" onClick={() => scrollToSection('about')}>
                <SvgIcon icon={Info} />
            </DockButton>
            
            <DockButton label="Skills" onClick={() => scrollToSection('skills')}>
                <SvgIcon icon={Skills} />
            </DockButton>
            
            <DockButton label="Project" onClick={() => scrollToSection('projects')}>
                <SvgIcon icon={Computer} />
            </DockButton>
            
            <DockButton label="Education" onClick={() => scrollToSection('education')}>
                <SvgIcon icon={Book} />
            </DockButton>
            
            <DockButton label="Experience" onClick={() => scrollToSection('experience')}>
                <SvgIcon icon={BriefCase} />
            </DockButton>
        </div>
        </>
    );
};

export default Nav;