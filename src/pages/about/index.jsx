import React from "react";
import { connect } from 'react-redux';
import { randomNumberAction } from "../../redux/dummyReducer/actions";
import Template from "./template";

class About extends React.Component {
    render() {
        return (
            <Template data={this.props} />
        );
    }
}

export default connect(
    // mapStateToProps
    (state) => (Object),
    // mapDispatchToProps
    (dispatch) => ({
        setRandomNumber: (value) => dispatch(randomNumberAction(value))
    })
)(About);