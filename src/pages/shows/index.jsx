import { fetcher } from '../../utils/fetcher';
import Template from "./template";

class Shows extends React.Component {
    static async getInitialProps () {
        const data = await fetcher('https://api.tvmaze.com/search/shows?q=batman');
        return {
            shows: data.map(entry => entry.show)
        };
    };

    render (){
        return (
            <Template data={this.props} />
        )
    }
}

export default Shows;