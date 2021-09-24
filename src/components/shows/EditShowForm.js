import React from 'react';

function EditShowForm(props) {
    const handleSubmit = event => {
        event.preventDefault();
        debugger;
    }

    return (
        <div class="edit-show-form">
            <h1>{props.show.title}</h1>
            <form onSubmit={handleSubmit}>
                <label for="theater">Theater</label>
                <input type="text" id="theater"></input>
                <label for="director">Director</label>
                <input type="text" id="director"></input>
                <label for="music">Music By</label>
                <input type="text" id="music"></input>
                <label for="lyrics">Lyrics By</label>
                <input type="text" id="lyrics"></input>
                <label for="book">Book By</label>
                <input type="text" id="book"></input>
                <label for="open-date">Open Date</label>
                <input type="text" id="open-date"></input>
                <label for="type">Type</label>
                <input type="text" id="type"></input>
                <input type="submit">Edit</input>
            </form>
        </div>
    )
}

export default EditShowForm; 