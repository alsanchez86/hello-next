import Link from 'next/link';
import Layout from '../components/Layout.jsx';

function getStyle(){
    return (
        <style jsx>{`
            h1,
            a {
              font-family: 'Arial';
            }

            ul {
              padding: 0;
            }

            li {
              list-style: none;
              margin: 5px 0;
            }

            a {
              text-decoration: none;
              color: blue;
            }

            a:hover {
              opacity: 0.6;
            }
      `}</style>
    );
}

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
    {getStyle()}
    <h1>Blog</h1>

    <ul>
    {getPosts().map(post => (
        <PostLink id={post.id} title={post.title} />
    ))}
    </ul>
</Layout>