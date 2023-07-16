import getPlanets from "./getPlanets.js";
import createPlanet from "./createPlanet.js";
import updatePlanet from "./updatePlanet.js";
import deletePlanet from "./deletePlanet.js";
import utils from "../utils/index.js";

export default {
    getPlanets: utils.catchedAsync(getPlanets),
    createPlanet: utils.catchedAsync(createPlanet),
    updatePlanet: utils.catchedAsync(updatePlanet),
    deletePlanet: utils.catchedAsync(deletePlanet)
}