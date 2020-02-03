import environment from "../../../environment";
import React from "react";
import { fetcher } from '../../utils/fetcher';
import Template from "./template";

class Quote extends React.Component {
    static async getInitialProps() {
        return await fetcher(environment.nextApi?.absolute + "/api/getQuote");
    }

    render() {
        return (
            <Template
                text={this.props.text}
                author={this.props.author}
            />
        );
    }
}

export default Quote;