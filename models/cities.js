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
                name: { type: String },
                img: {type: String, required: false},
                openHours: { type: String },
                admissionFee: { type: String },
                category: { type: String },
                website: { type: String }
            }
        ]
    }
);

const City = mongoose.model('City', citiesSchema);

module.exports = City;