import {GET_COLOR} from '../actions/PageActions'

const initialState = {
    isClicked: false,
}

export function pageReducer(state = initialState, action) {
    switch (action.type) {
        case GET_COLOR:
            return {...state, isClicked: true};
        default:
            return state
    }
}
