import { ThemeContext } from "../context/ThemeContext"
import { useContext } from "react"
import ThemeToggle from "../components/ThemeToggle"
import DockButton from "./DockButton";
import SvgIcon from "./SvgIcon";
import Github from "../assets/icons/github.svg?react";
import Linkedin from "../assets/icons/linkedin.svg?react";
import Mail from "../assets/icons/mail.svg?react";
import EyeOff from "../assets/icons/eye-close-svgrepo-com.svg?react";
import EyeOpen from "../assets/icons/eye-closed-svgrepo-com.svg?react";
const Dock = ({ toggleNav, isNavOpen, ...props }) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="dock" {...props} >
            <DockButton data-tooltip-content="Github" >
                <SvgIcon icon={Github} target="_blank" to="https://github.com/sampathkocherla" />
            </DockButton>
            <DockButton data-tooltip-content="Linkedin">
                <SvgIcon icon={Linkedin} target="_blank" to="https://www.linkedin.com/in/sampath-kocherla-31907a2b8/" />
            </DockButton>
            <DockButton data-tooltip-content="Mail">
                <SvgIcon icon={Mail} target="_blank" to="mailto:sampathkocherla7@gmail.com" />
            </DockButton>
            <DockButton data-tooltip-content="Theme" onClick={toggleTheme}>
                <ThemeToggle theme={theme} />
            </DockButton>
            <DockButton label="Menu" onClick={toggleNav}>
                {/* Swaps icon based on state */}
                {isNavOpen ? <SvgIcon icon={EyeOff} /> : <SvgIcon icon={EyeOpen} />}
            </DockButton>
        </div>
    );
};

export default Dock;
