import React from 'react';
import { connect } from 'react-redux';
import { getActivity } from '../actions';

export const Activity = (props) => {
    console.log(props)

    if (props.error) {
        return <h2>We have an error:</h2>;
    }
    if (props.ifFetching) {
        return <h2>Fetching activity for ya!</h2>;
    }

    return (
        <>
            <div>
                <h2>Bored? Try: {props.activity} </h2>
                <a>Link: {props.participants}</a>
            </div>
            <button onClick={() => props.getActivity()}>Get new Activity</button>
        </>
    );
};

const mapStateToProps = state => {
    return {
        activity: state.object.activity,
        isFetching: state.object.isFetching,
        error: state.object.error,
        participants: state.object.participants
      
    }
}

export default connect(mapStateToProps, { getActivity })(Activity);