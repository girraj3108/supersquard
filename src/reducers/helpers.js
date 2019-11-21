import character_json from '../data/characters.json'

export function createChar(id) {
    let characters = character_json.find(item => item.id === id)
    return characters;
}
//export default createCharacters;