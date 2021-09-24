import React from 'react';
import { useHistory } from 'react-router-dom';

const Show = props => {
    const history = useHistory();

    const handleClick = event => {
        if (props.isLoggedIn) {
            if (event.target.textContent === 'Add to Saved') {
                props.handleClick(props.show);
            } 
            if (event.target.textContent === 'Edit') {
                debugger;
                
            }
        } else {
            history.push("/signup");
        }
    }

    return (
        <div>
            <h3>{props.show.title}</h3>
            <ul>
                <li>Theater: {props.show.theater}</li>
                <li>Director: {props.show.director}</li>
                <li>Music by: {props.show.music}</li>
                <li>Lyrics by: {props.show.lyrics}</li>
                <li>Book by: {props.show.book}</li>
                <li>Open Date: {props.show.open_date}</li>
                <li>Type: Musical</li> {/*toggle musical/theater */}
            </ul> 
            <button className="gr-button" onClick={handleClick}>Add to Saved</button>
            <button className="gr-button" onClick={handleClick}>Edit</button>
        </div>
    )
}

export default Show;