export let ADD_CHARACTER = 'ADD_CHARACTER'
export let REMOVE_CHARACTER = "REMOVE_CHARACTER"

export function addCharactersById(id) {
    const action = {
        type: ADD_CHARACTER,
        id: id
    }
    return action;
}

export function removeCharacterById(id) {
    const action = {
        type: REMOVE_CHARACTER,
        id: id
    }
    return action;
}



