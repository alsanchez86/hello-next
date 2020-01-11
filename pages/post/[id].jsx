import { useRouter } from 'next/router';
import Layout from '../../components/Layout.jsx';

function Post (props) {
    const router = useRouter();
    return (
        <>
            <h1>{router.query.title}</h1>
        </>
    );
};

export default () =>

<Layout>
    <Post/>
</Layout>