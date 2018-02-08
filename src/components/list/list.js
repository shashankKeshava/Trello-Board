import React, {Component} from 'react';

import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Paper from 'material-ui/Paper';

import Card from '../card/'

import './index.css'

const style = {
    width: '100%',
    display: 'inline-block',
    backgroundColor: "#e3e4e6",
    padding: "5px 5px 15px 5px"
};

export default class ListCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.payload
        }
    }

    render() {
        const Cards = this
            .state
            .data
            .map((card,index)=> {
                return <Card payload={card} key={index} status={this.props.header} index={index}/>
            })

        return (
            <Paper style={style} zDepth={3}>
                <div className="list-header">{this.props.header}</div>
                <List>
                    {Cards}
                </List>
            </Paper>
        )
    }
}