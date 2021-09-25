// const URL = 'https://rocky-mountain-05852.herokuapp.com';
const URL = 'http://localhost:3000';

export function updateShow(show) {
    return async function updateShowThunk(dispatch, getState) {
        try {
            const resp = await fetch(`${URL}/users/${getState().user.id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'accepts': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify(show)
            });
            const data = await resp.json();
            debugger;
            // update Redux state
            // dispatch({type: 'shows/saveShow', payload: show});

            return data;
        } catch(error) {
            dispatch({ type: 'shows/error', payload: error });
        }

    }
}