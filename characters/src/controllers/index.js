import getCharacters from "./getCharacters.js"
import createCharacters from "./createCharacters.js";
import updateCharacters from "./updateCharacters.js";
import utils from "../utils/index.js";
import deleteCharacter from "./deleteCharacter.js";

export default {
    getCharacters: utils.catchedAsync(getCharacters),
    createCharacters: utils.catchedAsync(createCharacters),
    updateCharacters: utils.catchedAsync(updateCharacters),
    deleteCharacter: utils.catchedAsync(deleteCharacter)
}