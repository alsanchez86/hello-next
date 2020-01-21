import Layout from '../components/Layout.jsx';
import { Button } from 'primereact/button';

function handleClick () {
    alert(1);
    // TODO: Calcular aqui un número random y setearlo en el estado de la APP
    const randomNumber = Math.random();
    // Emitir accion al store
}

export default () =>

<Layout>
    <h1>
        Home
    </h1>

    <Button label="Click" icon="pi pi-check" onClick={handleClick} />
</Layout>