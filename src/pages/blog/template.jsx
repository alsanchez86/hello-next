import Layout from '../../components/Layout';
import PostLink from '../../components/PostLink';

export default (props) =>

<Layout>
    <h1>Blog</h1>

    {(props.posts?.length > 1) ?
    <ul>
    {props.posts?.map(post => (
        <PostLink key={post?.id} id={post?.id} title={post?.title} />
    ))}
    </ul>
    : null}
</Layout>