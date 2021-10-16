import React, { useState } from 'react';

const ReviewShowForm = props => {
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);

    const handleChange = () => {
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
                    <input type="radio" value="1" name="1" checked={rating === "1"} onChange={handleChange} />1
                    <input type="radio" value="2" name="2" checked={rating === "2"} onChange={handleChange} />2
                    <input type="radio" value="3" name="3" checked={rating === "3"} onChange={handleChange} />3
                    <input type="radio" value="4" name="4" checked={rating === "4"} onChange={handleChange} />4
                    <input type="radio" value="5" name="5" checked={rating === "5"} onChange={handleChange} />5
                </div>
                <br />
                <label htmlFor="comment">Comment</label>
                <textarea id="comment" value={comment} name="comment" onChange={handleChange} />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ReviewShowForm;