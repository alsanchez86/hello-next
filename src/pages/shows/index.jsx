import { fetcher } from '../../utils/fetcher';
import Template from "./template";

class Shows extends React.Component {
    static async getInitialProps () {
        const data = await fetcher('https://api.tvmaze.com/search/shows?q=batman');
        const shows = data.map(e => e.show);

        return {
            shows
        };
    };

    render (){
        return (
            <Template
                shows={this.props.shows}
            />
        )
    }
}

export default Shows;