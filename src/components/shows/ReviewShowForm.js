import React, { useState } from 'react';

const ReviewShowForm = props => {
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);

    const handleChange = event => {
        const name = event.target.name;
        if (name === "rating") {
            setRating(parseInt(event.target.value));
        }
        if (name === "comment") {
            setComment(event.target.comment);
        }
    }
    
    const handleClick = () => {
        debugger;
    }

    const handleSubmit = event => {
        event.preventDefault();
        debugger;
    }

    return(
        <div className="user-form">
            <h3>Review {props.show.title}</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="rating">Rating</label>
                <div className="radio">
                    <input type="radio" id="rating-1" value="1" name="rating" checked={rating === 1} onChange={handleChange} />1
                    <input type="radio" id="rating-2" value="2" name="rating" checked={rating === 2} onChange={handleChange} />2
                    <input type="radio" id="rating-3" value="3" name="rating" checked={rating === 3} onChange={handleChange} />3
                    <input type="radio" id="rating-4" value="4" name="rating" checked={rating === 4} onChange={handleChange} />4
                    <input type="radio" id="rating-5" value="5" name="rating" checked={rating === 5} onChange={handleChange} />5
                </div>
                <br />
                <label htmlFor="comment">Comment</label>
                <textarea id="comment" value={comment} name="comment" onChange={handleChange} />
                <br />
                <input type="submit" value="Submit" />
                <input type="button" onClick={handleClick} value="Cancel" />
            </form>
        </div>
    )
}

export default ReviewShowForm;