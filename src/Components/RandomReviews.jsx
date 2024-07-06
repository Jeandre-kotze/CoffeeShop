import { leftArrow,rightArrow } from "./icons";
import { RandomDummyReviews as reviews} from "../../Util/RandomReviews";
import {useState} from "react";

export default function RandomReviews(){

    const [currentIndex, setCurrentIndex] = useState(0);
    const [leftClicked, setLeftClicked] = useState(false);
    const [rightClicked, setRightClicked] = useState(false);

    function handleReviewIndexIncrement(){
        if(currentIndex === reviews.length - 1){
            setCurrentIndex(0);
        }
        else{
            setCurrentIndex(currentIndex + 1);
        }

        setRightClicked(true);
        setTimeout(setRightClicked(false), 300)
    }

    function handleReviewIndexDecrement(){
        if(currentIndex === 0){
            setCurrentIndex(reviews.length - 1);
        }
        else{
            setCurrentIndex(currentIndex - 1);
        }

        setLeftClicked(true);
        setTimeout(setLeftClicked(false), 300)
    }

    return (
                
        <div className="random-reviews-container">
        <div className="random-reviews-arrows-align">
            <button
                type="button"
                className="arrow"
                onClick={handleReviewIndexDecrement}
                aria-label="Previous review"
                title="Previous review"
            >
                {leftArrow}
            </button>
            <div
                className={`random-reviews-message-container ${leftClicked ? "left-clicked" : ''} ${rightClicked ? "right-clicked" : ''}`}
            >
                <h1 className="random-reviews-name">{reviews[currentIndex].name}</h1>
                <div className="random-reviews-stars">
                    {Array.from({ length: 5 }, (_, i) => (
                        <span key={i} className={`fa fa-star ${reviews[currentIndex].rating > i ? 'checked' : ''}`}></span>
                    ))}
                </div>
                <p className="random-reviews-message text-balance">❝{reviews[currentIndex].message}❞</p>
            </div>
            <button
                type="button"
                className="arrow"
                onClick={handleReviewIndexIncrement}
                aria-label="Next review"
                title="Next review"
            >
                {rightArrow}
            </button>
        </div>
    </div>
    
            )
}