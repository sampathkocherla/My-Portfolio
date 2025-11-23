import Freelancing from '../assets/freelancing.svg?react';
import Opensource from '../assets/opensource.svg?react';
import '../styles/experience.css';
import Timeline from '../components/Timeline';
import TimelineItem from '../components/TimelineItem';
import { TimeStamp } from '../components/TimelineItem';
import Upwork from '../assets/icons/upwork.svg?react';
import Fiverr from '../assets/icons/fiverr.svg?react';
import Github from '../assets/icons/github.svg?react';
import Vinoai from '../assets/vinoai.avif'
import BriefCase from '../assets/icons/BriefCase.svg?react'
export default function Experience({id}) {
    return (
        <div id={id}className='experience-section section' style={{ paddingBottom: '0' }}>
            <h2>Work Experience</h2>
            <div className='experience'>
                <div className='details'>
                    <h3>Work Experience</h3>
                    <p>Professional industry experience working in Agile environments, focusing on full-stack development, system optimization, and scalable architecture.</p>
                    <Timeline>
                        <TimelineItem icon={<BriefCase />} > {/* Replace <Briefcase /> with your icon component */}
                            <h4>Software Developer Intern, Gyanastra IT solutions</h4>
                            <TimeStamp stamp="April 2023-July 2023" /> {/* Update the date as needed */}
                            <p>
                                Developed full-stack applications using Python (Flask) and React, reducing feature delivery time by 30%. 
                                Optimized MongoDB schemas to improve query performance by 35% and built RESTful APIs that enhanced backend efficiency by 40%.
                            </p>
                        </TimelineItem>
                    </Timeline>
                </div>
                <div className="illustration">
                    <Opensource />
                </div>
            </div>
        </div>
    )
}
