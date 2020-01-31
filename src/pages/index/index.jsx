import React from "react";
import { connect } from 'react-redux';
import Template from "./template";

class Index extends React.Component {
    render() {
        return (
            <Template randomNumber={this.props.randomNumber} />
        );
    }
}

export default connect(
    // mapStateToProps
    (state) => ({
        randomNumber: state.dummyReducer.randomNumber
    })
)(Index);