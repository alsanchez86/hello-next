import { fetcher } from '../../../utils/fetcher';
import Template from "./template";

class Show extends React.Component {
    static async getInitialProps (context) {
        const { id } = context.query;
        const show = await fetcher(`https://api.tvmaze.com/shows/${id}`);
        return {
            show
        };
    };

    render (){
        return (
            <Template data={this.props} />
        )
    }
}

export default Show;