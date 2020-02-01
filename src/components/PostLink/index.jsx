import React from "react";
import Template from "./template";

export default class PostLink extends React.Component {
    render() {
        return (
            <Template
                id={this.props?.id}
                title={this.props?.title}
            />
        );
    }
}