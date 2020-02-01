import Layout from '../../components/Layout';
import { Button } from 'primereact/button';

export default (props) =>

<Layout>
    <h1>Dummy</h1>

    <p>
        {props.text}
    </p>

    <Button
        label="Async click local state"
        icon="pi pi-check"
        onClick={() => props.asyncClick()}
    />

    <Button
        label="Async click redux"
        icon="pi pi-check"
        onClick={() => props.asyncClickRedux()}
    />
</Layout>