import { ThemeContext } from "../context/ThemeContext"
import { useContext } from "react"
import { Cloud, renderSimpleIcon } from 'react-icon-cloud';
import {
    siPython,
    siReact,
    siJavascript,
    siMongodb,
    siVite,
    siGit,
    siGithub,
    siHtml5,
    siCss,
    siTailwindcss,
    siGooglegemini,
    siOpenai,
    siNodedotjs,
    siSupabase,
    siSpring,
    siOpenjdk,
    siMysql,
    siHibernate,
    siAuth0,
    siApachemaven,
    siApachekafka,
    siJunit5,
    siPostgresql,
    siRedis,
    siGithubactions, siDocker, siKubernetes, siGooglecloud, siAmazonwebservices, siIntellijidea, siVsco
} from 'simple-icons';

const cloudIcons = [siHibernate, siAuth0, siMysql, siOpenjdk, siPython, siReact, siJavascript, siMongodb, siVite, siGit, siGithub, siHtml5, siCss, siTailwindcss,
    siGooglegemini, siOpenai, siNodedotjs, siSupabase, siSpring, siApachemaven, siApachekafka, siJunit5, siPostgresql, siRedis, siGithubactions, siDocker, siKubernetes, siGooglecloud, siAmazonwebservices, siIntellijidea];


const IconCloud = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const icons = [...cloudIcons].map((icon) => {
        return renderSimpleIcon({
            minContrastRatio: 21,
            fallbackHex: (theme == 'dark') ? '#fff' : '#000',
            icon,
            size: 72,
            aProps: {
                onClick: (e) => e.preventDefault()
            }
        })
    });

    return (<>
        <Cloud options={{
            activeAudio: false,
            outlineMethod: 'none',
            pinchZoom: false,
            wheelZoom: false,
            initial: [0.1, 0.1],
            minSpeed: 0.01,
            clickToFront: 500,
            reverse: true,
        }}
            containerProps={{
                className: 'icon-cloud'
            }}
        >
            {icons}
        </Cloud>
    </>);
};

export default IconCloud;
