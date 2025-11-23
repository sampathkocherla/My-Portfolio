import Marquee from "react-fast-marquee";
import ReviewCard from "../components/ReviewCard";

const reviews = [
    {
        name: "",
        username: "",
        body: "",
    },
    {
        name: "",
        username: "",
        body: "",
    },
    {
        name: "",
        username: "",
        body: "",
    },
    {
        name: "",
        username: "",
        body: "",
    }
];



export default function Reviews() {
    return (
        <div className="section reviews-section">
            <h2>Reviews</h2>
            <Marquee pauseOnHover={true} speed={100} gradient={true} gradientColor="var(--clr-bg)">
                {reviews.map((review, index) => {
                    return <ReviewCard key={index} {...review} />;
                })}
            </Marquee>
        </div>
    )
}
