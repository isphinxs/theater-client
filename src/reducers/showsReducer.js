import { config } from '../Constants';

const URL = config.url;

const initialState = {
    shows: [],
    savedShows: [],
    isLoading: false,
    isLoggedIn: false,
    error: null,
    user: {}
}

function showsReducer(state = initialState, action) {
    switch(action.type) {
        case 'reviews/addComment': {
            const index = state.shows.findIndex(s => s.id === action.payload.show_id);
            const newShows = [...state.shows];
            newShows[index].comments.push(action.payload);
            
            return {
                ...state,
                shows: newShows,
                isLoading: false,
                error: null
            }
        }
        case 'reviews/addRating': {
            const index = state.shows.findIndex(s => s.id === action.payload.show_id);
            const newShows = [...state.shows];
            newShows[index].ratings.push(action.payload);

            return {
                ...state,
                shows: newShows,
                isLoading: false,
                error: null
            }
        }
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
        case 'shows/updateShow': {
            const index = state.shows.findIndex(s => s.id === action.payload.id);
            const newShows = [...state.shows];
            newShows[index] = action.payload;

            return {
                ...state,
                shows: newShows,
                comments: action.payload.comments,
                ratings: action.payload.ratings,
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
        case 'user/authenticating': {
            return {
                ...state,
                isLoading: true,
                error: null
            }
        }
        case 'user/saveUser': {
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                error: null,
                user: action.payload
            }
        }
        case 'user/logout': {
            return {
                ...state,
                savedShows: [],
                isLoading: false,
                isLoggedIn: false,
                error: null,
                user: {}
            }
        }
        case 'user/error': {
            return {
                ...state,
                isLoading: false,
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
    fetch(`${URL}/shows`)
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

export function checkForSavedShows(dispatch, getState) {
    dispatch({ type: 'shows/loading' });
    fetch(`${URL}/users/${getState().user.id}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
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
        
        const user = {
            user: { show_ids }
        }

        try {
            const resp = await fetch(`${URL}/users/${getState().user.id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'accepts': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify(user)
            });
            const data = await resp.json();
            
            // update Redux state
            dispatch({type: 'shows/saveShow', payload: show});

            return data;
        } catch(error) {
            dispatch({ type: 'shows/error', payload: error });
        }
    }
}

export function removeShow(show) {
    return async function removeShowThunk(dispatch, getState) {
        dispatch({ type: 'shows/loading', payload: getState()});
        
        // update database
        const savedShows = getState().savedShows;
        const show_ids = savedShows.map(show => show.id).filter(show_id => show_id !== show.id);

        const user = {
            user: { show_ids }
        }
        
        try {
            const resp = await fetch(`${URL}/users/${getState().user.id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'accepts': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify(user)
            });
            const data = await resp.json();
            
            // update Redux state
            dispatch({ type: 'shows/removeShow', payload: show});
            
            return data;
        } catch(error) {
            dispatch({ type: 'shows/error', payload: error });
        }
    }
}

export function createUser(name, email, password) {
    return async function createUserThunk(dispatch) {
        dispatch({ type: 'user/authenticating' });
        try {
            fetch(`${URL}/users`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'accepts': 'application/json'
                },
                body: JSON.stringify({ user: { name: name, email: email, password: password } })
            })
                .then(resp => resp.json())
                .then(data => {
                    if (data.error) {
                        dispatch({ type: 'user/error', payload: data.error });
                    } else {
                        localStorage.setItem("user", JSON.stringify(data.user));
                        localStorage.setItem('token', data.jwt);
                        dispatch({ type: 'user/saveUser', payload: data.user});
                    }
                })
        } catch(error) {
            dispatch({ type: 'user/error', payload: error });
        }
    }
}
export function saveUser(email, password) {
    return async function saveUserThunk(dispatch) {
        dispatch({ type: 'user/authenticating' });
        try {
            fetch(`${URL}/api/v1/auth`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'accepts': 'application/json'
                },
                body: JSON.stringify({ user: { email: email, password: password } })
            })
                .then(resp => resp.json())
                .then(data => {
                    if (data.error) {
                        dispatch({ type: 'user/error', payload: data.error });
                    } else {
                        localStorage.setItem("user", JSON.stringify(data.user));
                        localStorage.setItem('token', data.jwt);
                        dispatch({ type: 'user/saveUser', payload: data.user});
                    }
                })
        } catch(error) {
            dispatch({ type: 'user/error', payload: error });
        }
    }
}

export default showsReducer;