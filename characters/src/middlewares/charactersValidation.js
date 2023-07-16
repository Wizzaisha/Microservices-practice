import ClientError from "../utils/errors/index.js";

export default (req, res, next) => {
    const {name} = req.body;
    if(name) return next();
    else throw new ClientError("Variable name is required.", 401);
}