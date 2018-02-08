import {get} from 'lodash'

import {ADD_CARD, UPDATE_BOARD, REMOVE_CARD, EDIT_CARD} from '../utils/actionTypes'
import initialState from '../utils/data'

const trelloBoard = (prevState = initialState, action) => {
    let board = [];
    let status = null;
    let msg = null;
    let index = null;
    let newData = null;
    switch (action.type) {
        case ADD_CARD:
            {
                status = get(action, 'payload.dropDown', 'Todo');
                msg = get(action, 'payload.textArea', 'Dummy');
                newData = prevState;
                newData[status].push(msg)
                return Object.assign({}, initialState, prevState, newData);
            }
        case REMOVE_CARD:
            {
                status = get(action, 'status');
                index = get(action, 'index');
                newData = prevState;
                newData[status].splice(index, 1);
                return Object.assign({}, initialState, newData);
            }
        case EDIT_CARD:
            {
                status = get(action, 'status');
                index = get(action, 'index');
                msg = get(action, 'msg');
                newData = prevState;
                newData[status].splice(index, 0, msg);
                return Object.assign({}, initialState, newData);
            }
        default:
            return Object.assign({}, initialState, prevState);
    }

}

export default trelloBoard;