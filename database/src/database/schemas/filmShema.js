import { Schema } from "mongoose";

const filmSchema = new Schema({
    _id: String,
    title: {
        type: String,
    },
    opening_crawl: {
        type: String,
    },
    director: {
        type: String,
    },
    producer: {
        type: String,
    },
    release_date: {
        type: String,
    },
    characters: [{
        type: String,
        ref:  "Character"
    }],
    planets: [{
        type: String,
        ref: "Planet"
    }]
});

filmSchema.statics.list = async function () {
    return await this.find()
    .populate("characters", ["_id", "name"])
    .populate("planets", ["_id", "name"]);
};

filmSchema.statics.get = async function (_id) {
    return await this.findById(_id)
    .populate("characters", ["_id", "name"])
    .populate("planets", ["_id", "name"]);
};

filmSchema.statics.insert = async function (character) {
    return await this.create(character);
};


export default filmSchema;