import { FaStar } from "react-icons/fa"
import classes from "./StarReview.module.css"
import { useState } from "react";

const StarReview = () => {
    const numberOfStars = 10;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [rating, setRating] = useState(0);

    return (
        <div className={classes.container}>
            <h1>Give your review</h1>
            <div>
                {[...Array(numberOfStars)].map((_, index) => {
                    index += 1;     //since index here would be 1,2,3,4,5 not 0,1,2,3,4
                    return (
                        <FaStar color={index <= currentIndex ? "red" : "turquoise"} key={index} size={70} onMouseEnter={() => setCurrentIndex(index)} onClick={() => setRating(index)} onMouseLeave={() => setCurrentIndex(rating)} />)
                })
                }
            </div>
        </div>)
}

export default StarReview;