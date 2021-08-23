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

export function saveShow(show) {
    return async function saveShowThunk(dispatch) {
        // hard-code user
        const user = {
            user: { show_ids: [show.id] }
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

// export function saveShow(dispatch) {
//     dispatch({ type: 'shows/saving' });
//     // hard-code user
//     fetch('http://localhost:3000/users/1', {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json',
//             'accepts': 'application/json'
//         },
//         body: JSON.stringify({ show })
//     })
//         .then(resp => resp.json())
//         .then(data => {
//             debugger;
//         })
// }

export default showsReducer;