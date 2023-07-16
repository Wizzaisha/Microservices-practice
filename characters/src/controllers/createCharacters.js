import utils from "../utils/index.js";
import axios from "axios"

export default async(req, res) => {
    const { error, data }  = await axios.post("http://database:8004/Character", req.body);
    utils.response(res, 200, data.data);
}