import Link from 'next/link';
import Layout from '../components/Layout.jsx';

function getPosts() {
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

function PostLink (props) {
    return (
        <li key={props.id}>
            <Link href="/post/[id]/[title]" as={`/post/${props.id}/${props.title}`}>
                <a>{props.title}</a>
            </Link>
        </li>
    );
}

export default () =>

<Layout>
    <h1>Blog</h1>

    <ul>
    {getPosts().map(post => (
        <PostLink id={post.id} title={post.title} />
    ))}
    </ul>
</Layout>