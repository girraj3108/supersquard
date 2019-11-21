
import { createChar } from './helpers';
import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions'

function heros(state = [], action) {
    switch (action.type) {
        case ADD_CHARACTER:
            var heros = [...state, createChar(action.id)]
            return heros;
        case REMOVE_CHARACTER:
            heros = state.filter(items => items.id !== action.id)
            return heros;
        default:
            return state
    }
}

export default heros;