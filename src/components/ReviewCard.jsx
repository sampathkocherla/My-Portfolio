
export default function ReviewCard({ name, username, body, img }) {
    return (
        <div className="review-card">
            <div className="user">
                {img ? <img src={img} alt={name} /> : <div className="img">{name[0]}</div>}
                <div>
                    <h4>{name}</h4>
                    <p>{username}</p>
                </div>
            </div>
            <p>
                {body}
            </p>
        </div>
    )
}
