const initialState = {
    shows: [],
    savedShows: []
}

function showsReducer(state = initialState, action) {
    // debugger;
    switch(action.type) {
        case 'shows/saveShow': {
            return {
                ...state,
                savedShows: [...state.savedShows, action.payload]
            }
        }
        case 'shows/removeShow': {
            return {
                ...state,
                savedShows: state.savedShows.filter(show => show.id !== action.payload.id)
            }
        }
        case 'shows/loading': {
            return {
                ...state,
                shows: [...state.shows]
            }
        }
        case 'shows/saving': {
            return {
                ...state,
                shows: [...state.shows]
            }
        }
        case 'shows/setShows': {
            return {
                ...state,
                shows: action.payload
            }
        }
        case 'shows/setSavedShows': {
            return {
                ...state,
                savedShows: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export function fetchShows(dispatch) {
    dispatch({ type: 'shows/loading' });
    fetch('http://localhost:3000/shows')
        .then(resp => resp.json())
        .then(data => dispatch({
                type: 'shows/setShows',
                payload: data
            })  
        );
}

export function checkForSavedShows(dispatch) {
    dispatch({ type: 'shows/loading'});
    // hard-code user
    fetch('http://localhost:3000/users/1')
        .then(resp => resp.json())
        .then(data => {
            dispatch({
                type: 'shows/setSavedShows',
                payload: data.shows
            })
        });
}

export function saveShow(show, savedShows) {
    return async function saveShowThunk(dispatch) {
        // update Redux state
        dispatch({type: 'shows/saveShow', payload: show});

        // update database
        const show_ids = savedShows.map(show => show.id);
        if (!show_ids.includes(show.id)) {
            show_ids.push(show.id);
        }
        // hard-code user
        const user = {
            user: { show_ids }
        }
        const resp = await fetch('http://localhost:3000/users/1', {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'accepts': 'application/json'
            },
            body: JSON.stringify(user)
        });
        const data = await resp.json();
        return data;
    }
}

export function removeShow(show, savedShows) {
    return async function removeShowThunk(dispatch) {
        // update Redux state
        dispatch({ type: 'shows/removeShow', payload: show});

        // update database
        const show_ids = savedShows.map(show => show.id).filter(show_id => show_id !== show.id);
        // hard-code user
        const user = {
            user: { show_ids }
        }
        const resp = await fetch('http://localhost:3000/users/1', {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'accepts': 'application/json'
            },
            body: JSON.stringify(user)
        });
        const data = await resp.json();
        return data;
    }
}

export default showsReducer;