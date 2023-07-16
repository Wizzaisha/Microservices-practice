import utils from "../utils/index.js";
import models from "../database/index.js";

export default async (req, res) => {
    const {model} = req.params;
    const {id} = req.query;
    const response = await models[model].deleteOne({"_id": id});
    utils.response(res, 200, response);
};