import React from 'react';

function Ratings(props) {
    return(
        <>
            <h3>Ratings</h3>
            {props.show.ratings ? props.show.ratings.map(rating => {
                if (rating.rating !== 0) {
                    return(
                        <p key={rating.id}>User {rating.user_id} gives {rating.rating}/5 stars</p>
                    )
                }
            }) : "No ratings"}
        </>
    )
}

export default Ratings;