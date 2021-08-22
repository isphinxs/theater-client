const initialState = {
    shows: [],
    savedShows: []
}

function showsReducer(state = initialState, action) {
    switch(action.type) {
        case 'shows/saveShow': {
            return {
                ...state,
                savedShows: [...state.savedShows, action.payload]
            }
        }
        case 'shows/loading': {
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
        default: {
            return state;
        }
    }
}

export function fetchShows(dispatch) {
    dispatch({ type: 'shows/loading' });
    fetch("http://localhost:3000/shows")
        .then(resp => resp.json())
        .then(data => dispatch({
                type: 'shows/setShows',
                payload: data
            })  
        );
}

export default showsReducer;