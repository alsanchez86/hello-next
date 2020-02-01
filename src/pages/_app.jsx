import "primereact/resources/themes/nova-light/theme.css";
// import "primereact/resources/primereact.min.css";
// import "primeicons/primeicons.css";
import "../scss/main.scss";
import App from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import appStore from '../redux/appStore';

class Metajob extends App {
    static async getInitialProps({Component, ctx}) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return {
            pageProps
        };
    }

    render() {
        const {
            Component,
            pageProps,
            store
        } = this.props;

        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        );
    }
}

export default withRedux(appStore, {
    debug: true
})(Metajob);