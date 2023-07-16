import utils from "../utils/index.js";
import axios from "axios"

export default async(req, res) => {
    const { id } = req.query;
    const { error, data }  = await axios.delete(`http://database:8004/Character?id=${id}`);
    utils.response(res, 200, data.data);
};