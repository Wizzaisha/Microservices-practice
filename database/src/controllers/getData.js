import utils from "../utils/index.js";
import models from "../database/index.js";

export default async (req, res) => {
    const { model } = req.params;
    const { id } = req.query;

    if (id) {
        const response = await models[model].findById(id);
        return utils.response(res, 200, response);
    }
    
    const response = await models[model].list();
    return utils.response(res, 200, response);
};