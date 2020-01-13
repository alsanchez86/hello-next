import { useRouter } from 'next/router';
import Layout from '../../../components/Layout.jsx';

function Post (props) {
    const router = useRouter();
    const {id} = router.query;
    const {title} = router.query;
    return (
        <>
            <h1>{id}</h1>
            <p>{title}</p>
        </>
    );
};

export default () =>

<Layout>
    <Post/>
</Layout>