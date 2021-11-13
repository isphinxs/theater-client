import { config } from '../Constants';

const URL = config.url;

export function addComment(review) {
    return async function addCommentThunk(dispatch, getState) {
        try {
            const resp = await fetch(`${URL}/comments`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'accepts': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({comment: {
                    user_id: getState().user.id,
                    show_id: review.show_id,
                    comment: review.comment
                }})
            });
            const data = await resp.json();
            debugger;

            // update Redux state
            dispatch({type: 'reviews/addComment', payload: data});
            return data;

        } catch(error) {
            dispatch({ type: 'shows/error', payload: error });
        }
    }
}


export function updateShow(show) {
    return async function updateShowThunk(dispatch) {
        try {
            const resp = await fetch(`${URL}/shows/${show.id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'accepts': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify(show)
            });
            const data = await resp.json();

            // update Redux state
            dispatch({type: 'shows/updateShow', payload: data});
            return data;

        } catch(error) {
            dispatch({ type: 'shows/error', payload: error });
        }
    }
}