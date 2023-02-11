import { GET_ACTIVITY_ERROR, GET_ACTIVITY_SUCCESS, SET_IS_FETCHING } from "../actions";

const initialState = {
    object: {
        activity: "Organize Movie Collection",
        type: "busywork",
        participants: 1,
        price: 0,
        link: "",
        accessibility: 0,
        isFetching: false,
        error: ''
    }
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_FETCHING:

            return {
                ...state,
                isFetching: action.payload
            }
        case GET_ACTIVITY_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                isFetching: false, object: action.payload
            }
        case GET_ACTIVITY_ERROR:
            return {
                ...state,
                isFetching: false,
                activity: action.payload
            }
        default:
            return state;
    }
}
