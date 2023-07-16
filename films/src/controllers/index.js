import getFilms from "./getFilms.js";
import createFilm from "./createFilm.js";
import updateFilm from "./updateFilm.js";
import deleteFilm from "./deleteFilm.js";
import utils from "../utils/index.js";

export default {
    getFilms: utils.catchedAsync(getFilms),
    createFilm: utils.catchedAsync(createFilm),
    updateFilm: utils.catchedAsync(updateFilm),
    deleteFilm: utils.catchedAsync(deleteFilm)
}