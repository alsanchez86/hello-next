import Link from 'next/link';
import Layout from '../components/Layout.jsx';

function PostLink (props) {
    return (
        <li>
            <Link href="/post/[id]" as={`/post/${props.id}`}>
                <a>{props.id}</a>
            </Link>
        </li>
    );
}

export default () =>

<Layout>
    <h1>Blog</h1>

    <ul>
        <PostLink id="hello-nextjs" />
        <PostLink id="learn-nextjs" />
        <PostLink id="deploy-nextjs" />
    </ul>
</Layout>