require("./mustSee")
const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const citiesSchema = new Schema(
    {
        city: { type: String },
        picture: {type: String, required: false},
        country: { type: String },
        history: { type: String },
        temperature: { type: String },
        transportation: { type: String },
        mustSee: [
            {
                type: Schema.Types.ObjectId,ref: "MustSee"
            }
        ]
    }
);

const City = mongoose.model('City', citiesSchema);

module.exports = City;