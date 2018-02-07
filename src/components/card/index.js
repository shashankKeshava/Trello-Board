import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import './card.css'

const CardExampleWithAvatar = () => (
    <Card className="card">
      <CardText>
        {this.props.payload}
      </CardText>
    </Card>
  );

  export default CardExampleWithAvatar;