import character_json from '../data/characters.json'
import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions'
import { createChar } from './helpers';


function characters(state = character_json, action) {
    switch (action.type) {
        case ADD_CHARACTER:
            var characters = state.filter(items => items.id !== action.id)
            return characters
        case REMOVE_CHARACTER:
            characters = [...state, createChar(action.id)]
            return characters
        default:
            return state
    }
}

export default characters;