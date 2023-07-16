import getData from "./getData.js";
import utils from "../utils/index.js";
import createOne from "./createOne.js";
import updateData from "./updateData.js";
import deleteOne from "./deleteOne.js";

export default {
    getData: utils.catchedAsync(getData),
    createOne: utils.catchedAsync(createOne),
    updateData: utils.catchedAsync(updateData),
    deleteOne: utils.catchedAsync(deleteOne)
};
