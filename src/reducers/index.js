import {get} from 'lodash'
import {merge, addLast} from 'timm'

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
                prevState['payload'][status].push(msg);
                return merge(initialState, prevState);
            }
        default:
            return merge(initialState, prevState);
    }

}

export default trelloBoard;