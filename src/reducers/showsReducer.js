const initialState = {
    shows: [],
    savedShows: [],
    isLoading: false,
    error: null
}

function showsReducer(state = initialState, action) {
    // debugger;
    switch(action.type) {
        case 'shows/saveShow': {
            return {
                ...state,
                savedShows: [...state.savedShows, action.payload],
                isLoading: false,
                error: null
            }
        }
        case 'shows/removeShow': {
            return {
                ...state,
                savedShows: state.savedShows.filter(show => show.id !== action.payload.id),
                isLoading: false,
                error: null
            }
        }
        case 'shows/loading': {
            return {
                ...state,
                shows: [...state.shows],
                isLoading: true,
                error: null
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
                shows: action.payload,
                isLoading: false,
                error: null
            }
        }
        case 'shows/setSavedShows': {
            return {
                ...state,
                savedShows: action.payload,
                isLoading: false,
                error: null
            }
        }
        case 'shows/error': {
            return {
                ...state,
                error: action.payload
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
        )
        .catch(error => {
            dispatch({ type: 'shows/error', payload: error })
        });
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
        })
        .catch(error => {
            dispatch({ type: 'shows/error', payload: error })
        });
    }

export function saveShow(show) {
    return async function saveShowThunk(dispatch, getState) {
        dispatch({ type: 'shows/loading' });
        
        // check if show is already saved
        const savedShows = getState().savedShows;
        const show_ids = savedShows.map(show => show.id);
        if (show_ids.includes(show.id)) {
            return;
        }
        show_ids.push(show.id);
        
        // hard-code user
        const user = {
            user: { show_ids }
        }

        try {
            const resp = await fetch('http://localhost:3000/users/1', {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'accepts': 'application/json'
                },
                body: JSON.stringify(user)
            });
            const data = await resp.json();
            
            // update Redux state
            dispatch({type: 'shows/saveShow', payload: show});
            
            return data;
        } catch(error) {
            dispatch({ type: 'shows/error' });
        }
    }
}

export function removeShow(show) {
    return async function removeShowThunk(dispatch, getState) {
        dispatch({ type: 'shows/loading', payload: getState()});
        
        // update database
        const savedShows = getState().savedShows;
        const show_ids = savedShows.map(show => show.id).filter(show_id => show_id !== show.id);
        // hard-code user
        const user = {
            user: { show_ids }
        }
        
        try {
            const resp = await fetch('http://localhost:3000/users/1', {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'accepts': 'application/json'
                },
                body: JSON.stringify(user)
            });
            const data = await resp.json();
            
            // update Redux state
            dispatch({ type: 'shows/removeShow', payload: show});
            
            return data;
        } catch(error) {
            dispatch({ type: 'shows/error' });
        }
    }
}

export default showsReducer;