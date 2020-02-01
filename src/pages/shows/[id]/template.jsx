import Layout from '../../../components/Layout';

export default (props) =>

<Layout>
    <h1>
        {props.show?.name}
    </h1>

    <p>
        {props.show?.summary?.replace(/<[/]?[pb]>/g, '')}
    </p>

    {props.show?.image ? <img src={props.show?.image?.medium} /> : null}
</Layout>