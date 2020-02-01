import Layout from '../../components/Layout';

export default (props) =>

<Layout>
    <main className="quote-container">
        <div className="quote">
            {props.text}
        </div>

        {props.author && <span className="author">{props.author}</span>}
    </main>
</Layout>