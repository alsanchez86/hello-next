import Layout from '../../../components/Layout';
import Markdown from 'react-markdown';

export default (props) =>

<Layout>
    <h1>
        {props.id}
    </h1>

    <p>
        {props.title}
    </p>

    <div className="markdown">
        <Markdown source={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

And here's the content.
        `}/>
    </div>
</Layout>