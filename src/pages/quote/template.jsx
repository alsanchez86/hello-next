import Layout from '../../components/Layout';

export default (props) =>

<Layout>
    <main className="quote-container">
        <div className="quote">
            {props.data?.quote}
        </div>

        {props.data?.author && <span className="author">{props.data?.author}</span>}
    </main>
</Layout>