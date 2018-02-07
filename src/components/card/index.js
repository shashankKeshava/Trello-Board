import React, {Component} from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';

import './card.css'

class CardExampleWithAvatar extends Component {
  constructor(props){
    super(props);
    this.state={
      data:this.props.payload
    }
  }

  render() {
    console.log(this.state.data);
    return (
      <Card className="card">
        <CardText>
          {this.state.data}
        </CardText>
      </Card>
    )
  }
}

export default CardExampleWithAvatar;