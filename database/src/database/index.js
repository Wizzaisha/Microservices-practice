import mongoose from "mongoose";
import config from "../config/envs.js";
import characterSchema from "./schemas/characterSchema.js";
import planetSchema from "./schemas/planetShema.js";
import filmSchema from "./schemas/filmShema.js";

const conn = mongoose.createConnection(config.MONGO_URI);

export default {
    Character: conn.model("Character", characterSchema),
    Planet: conn.model("Planet", planetSchema),
    Film: conn.model("Film", filmSchema),
}