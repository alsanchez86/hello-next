import { useRouter } from 'next/router';
import Layout from '../../components/Layout.jsx';

const Post = () => {
    const router = useRouter();

    return (
        <>
            <h1>{router.query.title}</h1>
        </>
    );
};

export default () => {
    return (
        <Layout>
            <Post/>
        </Layout>
    );
}