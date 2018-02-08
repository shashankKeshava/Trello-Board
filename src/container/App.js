import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import List from '../components/list/';
import Dialog from '../components/dialog/';

import { addCard, removeCard } from '../actions';

import './App.css';

const style={
    justifyContent: 'center',
  backgroundColor: '#246aa0'
}
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
        };
    }
    render() {
        return (
            <div className="App">
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title={'Nutanix Trello Board'}
                            showMenuIconButton={false}
                            style={style}
                            iconElementRight={
                                <Dialog
                                    __addCard={payload =>
                                        this.props.addCard(payload)
                                    }
                                />
                            }
                        />
                        <List
                            payload={this.props.data}
                            deleteCard={(status, index) =>
                                this.props.removeCard(status, index)
                            }
                        />
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

const mapToStateToProps = state => {
    sessionStorage.setItem('trello', JSON.stringify(state));
    let prevState = JSON.parse(sessionStorage.getItem('trello'));
    // console.log(prevState);

    return { data: state };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            addCard,
            removeCard,
        },
        dispatch
    );

const appVisibility = connect(mapToStateToProps, mapDispatchToProps)(App);

export default appVisibility;
