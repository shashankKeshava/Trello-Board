import React, {Component} from 'react';
import {Card, CardText, CardActions} from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import Delete from 'material-ui-icons/DeleteForever';
import Edit from 'material-ui-icons/ModeEdit';
import {red500, blue500} from 'material-ui/styles/colors';

import {connect} from 'react-redux';
import {removeCard, editCard} from '../../actions'

import './card.css'

class CardExampleWithAvatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      msg: this.props.payload,
      status: this.props.status,
      index: this.props.index
    }
  }

  handleSubmit=()=>{
    const {dispatch,status,index} = this.props;
    this.setState({open: false});
    dispatch(editCard(status, index, this.state.msg));
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  __textAreaChange = (e) => {
    this.setState({msg: e.target.value})
  }

  render() {
    const {dispatch} = this.props;
    const msg=this.state.msg;
    const status=this.props.status;
    const index= this.props.index;
    const actions = [ < FlatButton label = "Cancel" primary = {
        true
      }
      onClick = {
        this.handleClose
      } />, < FlatButton label = "Submit" primary = {
        true
      }
      onClick = {
        () => this.handleSubmit()
      } />
    ];

    return (
      <div>
        <Dialog
          title="Edit Card"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}>
          <TextField
            defaultValue={this.props.payload}
            floatingLabelText="Description"
            multiLine={true}
            rows={2}
            onChange={this.__textAreaChange}/>
        </Dialog>

        <Card className="card">
          <CardText>
            {this.props.payload}
          </CardText>
          <CardActions>
            <Delete
              className={"card-delete"}
              color={red500}
              onClick={() => dispatch(removeCard(this.props.status, this.props.index))}/>
            <Edit className={"card-edit"} color={blue500} onClick={this.handleOpen}/>
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default connect()(CardExampleWithAvatar);