import { get } from 'lodash';

import {
    ADD_CARD,
    REMOVE_CARD,
    EDIT_CARD,
    MOVE_HORIZONTAL,
    MOVE_VERTICAL,
} from '../utils/actionTypes';
import initialState from '../utils/data';

const trelloBoard = (prevState = initialState, action) => {
    let status = null;
    let msg = null;
    let index = null;
    let newData = null;
    let currPos = null;
    let nextPos = null;
    switch (action.type) {
        case ADD_CARD: {
            status = get(action, 'payload.dropDown', 'Todo');
            msg = get(action, 'payload.textArea', 'Dummy');
            newData = prevState;
            newData[status].push(msg);
            return Object.assign({}, initialState, prevState, newData);
        }
        case REMOVE_CARD: {
            status = get(action, 'status');
            index = get(action, 'index');
            newData = prevState;
            newData[status].splice(index, 1);
            return Object.assign({}, initialState, newData);
        }
        case EDIT_CARD: {
            status = get(action, 'status');
            index = get(action, 'index');
            msg = get(action, 'msg');
            newData = prevState;
            newData[status].splice(index, 1, msg);
            return Object.assign({}, initialState, newData);
        }
        case MOVE_VERTICAL: {
            currPos = get(action, 'currPos');
            nextPos = get(action, 'nextPos');
            if (nextPos === -1)
                return Object.assign({}, initialState, prevState);
            status = get(action, 'status');
            newData = prevState;
            if (nextPos > newData[status].length)
                return Object.assign({}, initialState, prevState);
            msg = newData[status].splice(currPos, 1);
            newData[status].splice(nextPos, 0, msg[0]);
            return Object.assign({}, initialState, newData);
        }
        case MOVE_HORIZONTAL: {
            let prevStatus = get(action, 'prevStatus');
            let nextStatus = get(action, 'nextStatus');
            let next = get(action, 'pos');
            index = get(action, 'index');
            status = get(action, 'status');
            newData = prevState;
            if (next === 'right' && !nextStatus)
                return Object.assign({}, initialState, prevState);
            if (next === 'left' && !prevStatus)
                return Object.assign({}, initialState, prevState);
            if (next === 'right') {
                msg = newData[status].splice(index, 1);
                newData[nextStatus].push(msg[0]);
            } else {
                msg = newData[status].splice(index, 1);
                newData[prevStatus].push(msg[0]);
            }
            return Object.assign({}, initialState, newData);
        }
        default:
            return Object.assign({}, initialState, prevState);
    }
};

export default trelloBoard;
