import React from 'react';
import Show from '../Show';

function ShowView(props) {
    return(
        <React.Fragment>
            <h3>Show View</h3>
            <Show show={props.show} handleClick={props.handleClick} isLoggedIn={props.isLoggedIn} />
            <button className="gr-button" onClick={handleClick}>Add to Saved</button>
            <button className="gr-button" onClick={handleClick}>Edit</button>
            <button className="gr-button" onClick={handleClick}>Review</button>
        </React.Fragment>
    )
}

export default ShowView;