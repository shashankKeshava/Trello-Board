import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import List from '../components/list/';
import Dialog from '../components/dialog/'

import {updateBoard, addCard} from '../actions';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <div>
            <AppBar
              title={this.props.header}
              showMenuIconButton={false}
              className={"App-Header"}
              iconElementRight={< Dialog __addCard = {(payload)=>
              this
                .props
                .addCard(payload)
            } />}/>
            <List payload={this.props.data}/>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

const mapToStateToProps = state => {
  return {header: state.header, data: state.payload}
}

const mapDispatchToProps = dispatch => bindActionCreators({
  updateBoard,
  addCard
}, dispatch)

const appVisibility = connect(mapToStateToProps, mapDispatchToProps)(App);

export default appVisibility;
