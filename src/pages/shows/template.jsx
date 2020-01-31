import Layout from '../../components/Layout';
import Link from 'next/link';

export default (props) =>

<Layout>
    <h1>Batman TV Shows</h1>

    <ul>
        {props.data?.shows?.map(show => (
        <li key={show?.id}>
            <Link href="/shows/[id]" as={`/shows/${show?.id}`}>
                <a>{show?.name}</a>
            </Link>
        </li>
        ))}
    </ul>
</Layout>