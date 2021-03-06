import { useRouter } from 'next/router';
import Markdown from 'react-markdown';
import Layout from '../../components/Layout.jsx';

function Post (props) {
    const router = useRouter();
    const {id} = router.query;
    return (
        <>
            <style jsx global>{`
                .markdown {
                    font-family: 'Arial';
                }

                .markdown a {
                    text-decoration: none;
                    color: blue;
                }

                .markdown a:hover {
                    opacity: 0.6;
                }

                .markdown h3 {
                    margin: 0;
                    padding: 0;
                    text-transform: uppercase;
                }
            `}</style>

            <h1>
                {id}
            </h1>

            <div className="markdown">
                <Markdown source={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

And here's the content.
                `}/>
            </div>
        </>
    );
};

export default () =>

<Layout>
    <Post/>
</Layout>