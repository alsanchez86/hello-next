import React from "react";
import Template from "./template";

class Blog extends React.Component {
    getPosts() {
        return [{
                id: 'hello-nextjs',
                title: 'Hello Next.js'
            },
            {
                id: 'learn-nextjs',
                title: 'Learn Next.js is awesome'
            },
            {
                id: 'deploy-nextjs',
                title: 'Deploy apps with ZEIT'
            }
        ];
    }

    render() {
        return (
            <Template
                posts={this.getPosts()}
            />
        );
    }
}

export default Blog;