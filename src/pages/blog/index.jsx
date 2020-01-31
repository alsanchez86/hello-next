import React from "react";
import { fetcher } from '../../utils/fetcher';
import Template from "./template";

class Blog extends React.Component {
    static async getInitialProps() {
        const posts = await fetcher('http://localhost:3000/api/getPosts');
        return {
            posts
        };
    }

    render() {
        return (
            <Template data={this.props} />
        );
    }
}

export default Blog;