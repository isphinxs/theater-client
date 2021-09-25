import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateShow } from '../../actions/showActions';

function EditShowForm(props) {
    const [theater, setTheater] = useState(props.show.theater);
    const [director, setDirector] = useState(props.show.director);
    const [music, setMusic] = useState(props.show.music);
    const [lyrics, setLyrics] = useState(props.show.lyrics);
    const [book, setBook] = useState(props.show.book);
    const [openDate, setOpenDate] = useState(props.show.open_date);
    const [type, setType] = useState(props.show.type);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = event => {
        event.preventDefault();
        const show = { id: props.show.id, theater, director, music, lyrics, book, openDate, type };
        const updateShowThunk = updateShow(show);
        dispatch(updateShowThunk);
        history.push(`/shows/${props.show.id}`);
    }

    const handleChange = event => {
        const name = event.target.name;
        switch (name) {
            case "theater":
                setTheater(event.target.value);
                break;
            case "director":
                setDirector(event.target.value);
                break;
            case "music":
                setMusic(event.target.value);
                break;
            case "lyrics":
                setLyrics(event.target.value);
                break;
            case "book":
                setBook(event.target.value);
                break;
            case "open-date":
                setOpenDate(event.target.value);
                break;
            case "type":
                setType(event.target.value);
                break;

        }
    }

    return (
        <div className="user-form">
            <h3>{props.show.title}</h3>
            <form onSubmit={handleSubmit} >
                <label htmlFor="theater">Theater</label>
                <input type="text" id="theater" value={theater} name="theater" onChange={handleChange} />
                <br />
                <label htmlFor="director">Director</label>
                <input type="text" id="director" value={director} name="director" onChange={handleChange} />
                <br />
                <label htmlFor="music">Music By</label>
                <input type="text" id="music" value={music} name="music" onChange={handleChange} />
                <br />
                <label htmlFor="lyrics">Lyrics By</label>
                <input type="text" id="lyrics" value={lyrics} name="lyrics" onChange={handleChange} />
                <br />
                <label htmlFor="book">Book By</label>
                <input type="text" id="book" value={book} name="book" onChange={handleChange} />
                <br />
                <label htmlFor="open-date">Open Date</label>
                <input type="date" id="open-date" value={openDate} name="open-date" onChange={handleChange} />
                <br />
                <label htmlFor="type">Type</label>
                <select id="type" value={type} name="type" onChange={handleChange}>
                    <option value="Musical">Musical</option>
                    <option value="Play">Play</option>
                </select>
                <br />
                <input type="submit" value="Submit Edits" />
            </form>
        </div>
    )
}

export default EditShowForm; 