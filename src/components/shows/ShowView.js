import React from 'react';
import { useHistory } from 'react-router-dom';
import Show from '../Show';

const ShowView = props => {
    const history = useHistory();

    const handleClick = event => {
        if (props.isLoggedIn) {
            if (event.target.textContent === 'Add to Saved') {
                props.handleClick(props.show);
            } 
            if (event.target.textContent === 'Edit') {
                history.push(`/shows/${props.show.id}/edit`);
            }
            if (event.target.textContent === 'Review') {
                history.push(`/shows/${props.show.id}/review`);
            }
        } else {
            history.push("/signup");
        }
    }

    return(
        <React.Fragment>
            <Show show={props.show} handleClick={props.handleClick} isLoggedIn={props.isLoggedIn} />
            <button className="gr-button" onClick={handleClick}>Add to Saved</button>
            <button className="gr-button" onClick={handleClick}>Edit</button>
            <button className="gr-button" onClick={handleClick}>Review</button>
        </React.Fragment>
    )
}

export default ShowView;