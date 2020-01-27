import React from "react";
import Template from "./template";

export default class PostLink extends React.Component {
    render() {
        return (
            <Template data={this.props} />
        );
    }
}