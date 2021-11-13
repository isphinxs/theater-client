import React from 'react';

function Comments(props) {
    return(
        <div>
            <h3>Comments</h3>
            {props.show.comments ? props.show.comments.map(comment => {
                return(
                    <p>User {comment.user_id} says "{comment.comment}"</p>
                )
            }) : "No comments"}
        </div>
    )
}

export default Comments;