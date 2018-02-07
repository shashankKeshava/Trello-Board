import React, {Component} from 'react';

import List from './list'

import  './index.css'

export default class Group extends Component {
    render() {
        const Items = Object
            .keys(this.props.payload)
            .map(item => {
                return <List header={item} key={item} payload={this.props.payload[item]}/>
            })
        return (
            <div className="list-group">
                {Items}
            </div>
        )

    }
}