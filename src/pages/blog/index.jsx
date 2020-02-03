import environment from "../../../environment";
import React from "react";
import { fetcher } from '../../utils/fetcher';
import Template from "./template";

class Blog extends React.Component {
    static async getInitialProps() {
        const posts = await fetcher(environment.nextApi?.absolute + "/api/getPosts");

        return {
            posts
        };
    }

    render() {
        return (
            <Template posts={this.props.posts} />
        );
    }
}

export default Blog;