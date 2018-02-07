import React, {Component} from 'react';

import List from './list'

import './index.css'

export default class Group extends Component {
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
                return <List
                    header={item}
                    key={item}
                    payload={this.state.payload[item]}
                    />
            })
        return (
            <div className="list-group">
                {Items}
            </div>
        )

    }
}