import utils from "../utils/index.js";
import axios from "axios"

export default async(req, res) => {
    const { id } = req.query;
    const { error, data }  = await axios.put(`http://database:8004/Character?id=${id}`, req.body);
    utils.response(res, 200, data.data);
};