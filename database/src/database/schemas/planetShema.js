import { Schema } from "mongoose";

const planetSchema = new Schema({
    _id: String,
    name: {
        type: String,
    },
    rotation_period: {
        type: String,
    },
    orbital_period: {
        type: String,
    },
    diameter: {
        type: String,
    },
    climate: {
        type: String,
    },
    gravity: {
        type: String,
    },
    terrain: {
        type: String,
    },
    surface_water: {
        type: String,
    },
    res_idents: [{
        type: String,
        ref:  "Character"
    }],
    films: [{
        type: String,
        ref: "Film"
    }]
});

planetSchema.statics.list = async function () {
    return await this.find()
    .populate("res_idents", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

planetSchema.statics.get = async function (_id) {
    return await this.findById(_id)
    .populate("res_idents", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

planetSchema.statics.insert = async function (character) {
    return await this.create(character);
};

export default planetSchema;