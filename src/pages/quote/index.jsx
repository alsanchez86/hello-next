import React from "react";
import { fetcher } from '../../utils/fetcher';
import Template from "./template";

class Quote extends React.Component {
    static async getInitialProps() {
        return await fetcher('http://localhost:3000/api/getQuote');
    }

    render() {
        return (
            <Template data={this.props}/>
        );
    }
}

export default Quote;