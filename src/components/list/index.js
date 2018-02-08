import React, {Component} from 'react';

import List from './list'
import './index.css'

class Group extends Component {
    constructor(props) {
        super(props);
        this.state = {
            payload: this.props.payload
        }
    }

    render() {
        const Items = Object
            .keys(this.state.payload)
            .map(item => {
                return <div style={{flex:1,margin: 20,maxWidth: "33%",}}><List
                    header={item}
                    key={item}
                    payload={this.state.payload[item]}
                    /></div>
            })
        return (
            <div className="list-group">
                {Items}
            </div>
        )

    }
}

export default Group