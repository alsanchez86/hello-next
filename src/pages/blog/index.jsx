// import environment from "../../../environment";
import absoluteUrl from "next-absolute-url";
import React from "react";
import { fetcher } from '../../utils/fetcher';
import Template from "./template";

class Blog extends React.Component {
    static async getInitialProps({ req }) {
        const { protocol, host } = absoluteUrl(req);
        const baseUrl = `${protocol}//${host}`;
        const posts = await fetcher(baseUrl + "/api/getPosts");

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