import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

import "./index.css"

export default class DialogWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      dropDown: "Todo",
      textArea: null
    }
  };

  __dropDownChange = (event, index, value) => this.setState({dropDown: value});

  __textAreaChange = (event, value) => this.setState({textArea: value})

  handleSubmit = () => {
    this.props.__addCard({
        ...this.state
      });
    this.setState({open: false});
  }

  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open: false});
  }

  render() {
    const actions = [ < FlatButton label = "Cancel" primary = {
        true
      }
      onClick = {
        this.handleClose
      } />, < FlatButton label = "Submit" primary = {
        true
      }
      onClick = {
        this.handleSubmit
      } />
    ];

    return (
      <div>
        <FloatingActionButton mini={true} onClick={this.handleOpen}>
          <ContentAdd/>
        </FloatingActionButton>
        <Dialog
          title="Add a Card"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}>
          <form className={"dialogForm"}>
          <DropDownMenu value={this.state.dropDown} onChange={this.__dropDownChange}>
              <MenuItem value={"Todo"} primaryText="Todo"/>
              <MenuItem value={"In Progress"} primaryText="In Progress"/>
              <MenuItem value={"Done"} primaryText="Done"/>
            </DropDownMenu>
            <TextField
              hintText="Enter Text"
              floatingLabelText="Description"
              onChange={this.__textAreaChange}/>
          </form>
        </Dialog>
      </div>
    );
  }
}