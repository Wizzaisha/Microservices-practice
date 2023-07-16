
import utils from "../utils/index.js";

export default {
    list: async () => {
        return await utils.parseJson("../data/characters.json");
    }
}