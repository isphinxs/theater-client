import React from 'react';

function EditShowForm(props) {
    const handleSubmit = event => {
        event.preventDefault();
        debugger;
    }

    return (
        <div class="user-form">
            {/* <h1>{props.show.title}</h1> */}
            <h1>Edit Show Form</h1>
            <form onSubmit={handleSubmit}>
                <label for="theater">Theater</label>
                <input type="text" id="theater" />
                <br />
                <label for="director">Director</label>
                <input type="text" id="director" />
                <br />
                <label for="music">Music By</label>
                <input type="text" id="music" />
                <br />
                <label for="lyrics">Lyrics By</label>
                <input type="text" id="lyrics" />
                <br />
                <label for="book">Book By</label>
                <input type="text" id="book" />
                <br />
                <label for="open-date">Open Date</label>
                <input type="text" id="open-date" />
                <br />
                <label for="type">Type</label>
                <input type="text" id="type" />
                <br />
                <input type="submit" value="Edit" />
            </form>
        </div>
    )
}

export default EditShowForm; 