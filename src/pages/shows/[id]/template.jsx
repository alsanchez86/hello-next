import Layout from '../../../components/Layout';

export default (props) =>

<Layout>
    <h1>
        {props.data?.show?.name}
    </h1>

    <p>
        {props.data?.show?.summary?.replace(/<[/]?[pb]>/g, '')}
    </p>

    {props.data?.show?.image ? <img src={props.data?.show?.image?.medium} /> : null}
</Layout>