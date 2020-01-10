import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

export default () => {
    const router = useRouter();

    return (
        <Layout>
            {JSON.stringify(show)}
        </Layout>
    );
}