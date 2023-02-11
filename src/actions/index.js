import axios from 'axios';

export const GET_ACTIVITY = 'GET_ACTIVITY';
export const GET_ACTIVITY_SUCCESS = 'GET_ACTIVITY_SUCCESS';
export const GET_ACTIVITY_ERROR = 'GET_ACTIVITY_ERROR';
export const SET_IS_FETCHING = 'SET_IS_FETCHING';

export const getActivity = () => dispatch => {
    dispatch(setIsFetching(true));
    axios.get('https://www.boredapi.com/api/activity').then((res) => {
    const object = res.data
   
dispatch(getActivitySuccess(object))
    }, (error) => {

    })
    return {type: GET_ACTIVITY, payload: {data:'hello'}}
};

const setIsFetching = (isFetching) => {
    return {type: SET_IS_FETCHING, payload: isFetching }
};

const getActivitySuccess = (activity) => {
    return {type: GET_ACTIVITY_SUCCESS, payload: activity}
};
const getActivityError = (error) => {
    return {type: GET_ACTIVITY_ERROR, payload: error}
}