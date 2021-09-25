import React from 'react';

function EditShowForm(props) {
    const handleSubmit = event => {
        event.preventDefault();
        debugger;
    }

    return (
        <div className="user-form">
            <h3>{props.show.title}</h3>
            <form onSubmit={handleSubmit}>
                <label for="theater">Theater</label>
                <input type="text" id="theater" value={props.show.theater} />
                <br />
                <label for="director">Director</label>
                <input type="text" id="director" value={props.show.director} />
                <br />
                <label for="music">Music By</label>
                <input type="text" id="music" value={props.show.music} />
                <br />
                <label for="lyrics">Lyrics By</label>
                <input type="text" id="lyrics" value={props.show.lyrics} />
                <br />
                <label for="book">Book By</label>
                <input type="text" id="book" value={props.show.book} />
                <br />
                <label for="open-date">Open Date</label>
                <input type="date" id="open-date" value={props.show.open_date} />
                <br />
                <label for="type">Type</label>
                <select value={props.show.type}>
                    <option value="Musical">Musical</option>
                    <option value="Play">Play</option>
                </select>
                <br />
                <input type="submit" value="Edit" />
            </form>
        </div>
    )
}

export default EditShowForm; 