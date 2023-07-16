import utils from "../utils/index.js";
import models from "../database/index.js";

export default async (req, res) => {
    const {model} = req.params;
    const response = await models[model].create(req.body);
    utils.response(res, 200, response);
};