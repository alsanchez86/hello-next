import React from "react";
import { fetcher } from '../../utils/fetcher';
import Template from "./template";

class Dummy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.DEFAULT_TEXT,
            count: 0
        };
    }

    // Const
    DEFAULT_TEXT = "Initial text";
    CAT_FACTS="https://cat-fact.herokuapp.com/facts";

    async asyncClick() {
        const facts = await fetcher(this.CAT_FACTS);
        const count = this.state.count + 1;
        this.setState({
            text: facts?.all[count]?.text,
            count: count
        });
    }

    asyncClickRedux(){

    }

    render() {
        return (
            <Template
                text={this.state?.text}
                asyncClick={() => this.asyncClick()}
                asyncClickRedux={() => this.asyncClickRedux()}
            />
        );
    }
}

export default Dummy;