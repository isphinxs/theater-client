import React from 'react';

function Comments(props) {
    return(
        <div className="comments">
            <h3>Comments</h3>
            {props.show.comments && props.show.comments.length > 0 ? props.show.comments.map(comment => {
                if (comment.comment !== "") {
                    return(
                        <p key={comment.id}>User {comment.user_id} says "{comment.comment}"</p>
                    )
                }
            }) : "No comments"}
        </div>
    )
}

export default Comments;