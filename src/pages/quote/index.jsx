// import absoluteUrl from "next-absolute-url";
import React from "react";
// import { fetcher } from '../../utils/fetcher';
import Template from "./template";

class Quote extends React.Component {
    static async getInitialProps({ req }) {
        // const { protocol, host } = absoluteUrl(req);
        // const baseUrl = `${protocol}//${host}`;
        // return await fetcher(baseUrl + "/api/getQuote");
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