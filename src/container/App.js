import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import List from '../components/list/';
import Dialog from '../components/dialog/';

import { updateBoard, addCard, removeCard } from '../actions';

import './App.css';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
        };
    }
    render() {
        console.log('Updated', this.state.data);
        return (
            <div className="App">
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title={'Trello Board'}
                            showMenuIconButton={false}
                            className={'App-Header'}
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
    localStorage.setItem('trello', JSON.stringify(state));
    let prevState = JSON.parse(localStorage.getItem('trello'));

    return { data: state };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            updateBoard,
            addCard,
            removeCard,
        },
        dispatch
    );

const appVisibility = connect(mapToStateToProps, mapDispatchToProps)(App);

export default appVisibility;
