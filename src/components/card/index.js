import React, {Component} from 'react';
import {
  Card,
  CardText,
  CardActions
} from 'material-ui/Card';
import Delete from 'material-ui-icons/DeleteForever';
import Edit from 'material-ui-icons/ModeEdit';
import {red500, blue500} from 'material-ui/styles/colors';

import { connect } from 'react-redux';
import {removeCard} from '../../actions'

import './card.css'

class CardExampleWithAvatar extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {dispatch}=this.props;
    return (
      <Card className="card">
        <CardText>
          {this.props.payload}
        </CardText>
        <CardActions>
        <Delete  className={"card-delete"} color={red500} onClick={()=>dispatch(removeCard(this.props.status,this.props.index))}/>
        <Edit  className={"card-edit"} color={blue500}/>
        </CardActions>
      </Card>
    )
  }
}

export default connect()(CardExampleWithAvatar);