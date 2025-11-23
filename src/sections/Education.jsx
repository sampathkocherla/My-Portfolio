import Timeline from '../components/Timeline';
import TimelineItem from '../components/TimelineItem';
import { TimeStamp } from '../components/TimelineItem';
import College from '../assets/icons/college.svg?react';
import School from '../assets/icons/school.svg?react';
import Learning from '../assets/learning.svg?react';
import '../styles/education.css';

export default function Education({id}) {
    return (
        <div id={id}className='section education-section'>
            <h2>Education</h2>
            <div className='education'>
                <div className="illustration">
                    <Learning />
                </div>
                <div className='details'>
                    <Timeline>
                        <TimelineItem icon={<College />} bgColor="#444444">
                            <h4>Geethanjali College of Engineering And Technology</h4>
                            <p>Electronics and Communication Engineering </p>
                            <TimeStamp stamp="2021 - 2025" />
                            <p>CGPA : 6.9</p>
                        </TimelineItem>
                        <TimelineItem icon={<College />} bgColor="#444444">
                            <h4>Telangana Social Welfare Residential Junior College</h4>
                            <p>MPC</p>
                            <TimeStamp stamp="2019 - 2021" />
                            <p>CGPA : 8.4</p>
                        </TimelineItem>
                            <TimelineItem icon={<School />} bgColor="#444444">
                            <h4>ZPP High School</h4>
                      
                            <TimeStamp stamp="2018 - 2019" />
                            <p>CGPA : 8.3</p>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
        </div>
    )
}
