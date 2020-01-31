import { withRouter } from 'next/router';
import Template from "./template";

class Post extends React.Component {
    render() {
        const {id} = this.props.router.query;
        const {title} = this.props.router.query;

        return (
            <Template id={id} title={title}/>
        );
    }
}

export default withRouter(Post);