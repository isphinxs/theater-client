function moviesReducer(state = [], action) {
    switch(action.type) {
        case "SET_SHOWS":
            return action.payload
            break;
        default:
            return state;
    }
}

export default moviesReducer;