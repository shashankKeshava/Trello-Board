import {get} from 'lodash'

import {ADD_CARD, UPDATE_BOARD, REMOVE_CARD} from '../utils/actionTypes'
import initialState from '../utils/data'

const trelloBoard = (prevState = initialState, action) => {
    let board = [];
    let status = null;
    let msg = null;
    switch (action.type) {
        case ADD_CARD:
            {
                status = get(action, 'payload.dropDown', 'Todo');
                msg = get(action, 'payload.textArea', 'Dummy');
                const newData=prevState;
                newData[status].push(msg)
                return Object.assign({},initialState, prevState,newData);
            }
        default:
            return Object.assign({},initialState, prevState);
    }

}

export default trelloBoard;