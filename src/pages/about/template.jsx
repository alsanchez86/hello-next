import { Button } from 'primereact/button';
import Layout from '../../components/Layout';

export default (props) =>

<Layout>
    <p>
        This is the about page
    </p>

    <Button
        label="Set random number"
        icon="pi pi-check"
        onClick={() => props.data?.setRandomNumber(Math.random())} />
</Layout>