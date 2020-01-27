import React from "react";
import Template from "./template";

export default class Layout extends React.Component {
    render() {
        return (
            <Template data={this.props} />
        );
    }
}