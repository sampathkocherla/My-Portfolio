export default function TimelineItem({ children, icon, color = 'var(--clr-accent)', bgColor = 'transparent', to }) {
    let IconElement;
    if (typeof icon === 'string') {
        IconElement = <img src={icon} alt="icon" />;
    } else {
        IconElement = icon;
    }

    if (!to) {
        return (
            <li className="timeline-item" style={{ '--clr': color, '--bg-clr': bgColor }}>
                <div className="timeline-icon">
                    {IconElement}
                </div>
                <div className="new-comment">
                    {children}
                </div>
            </li>
        )
    }

    return (
        <li className="timeline-item" style={{ '--clr': color, '--bg-clr': bgColor }}>
            <a href={to} target="_blank" rel="noreferrer">
                <div className="timeline-icon">
                    {IconElement}
                </div>
                <div className="new-comment">
                    {children}
                </div>
            </a>
        </li>
    )
}

const TimeStamp = ({ stamp }) => {
    return <div className="stamp">{stamp}</div>
}


export { TimeStamp }