const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const hostCitiesSchema = new Schema(
    {
        city: { type: String },
        country: { type: String },
        history: { type: String },
        temperature: { type: String },
        transportation: { type: String },
        mustSee: [
            {
                name: { type: String },
                openHours: { type: String },
                admissionFee: { type: String },
                category: { type: String },
                website: { type: String }
            }
        ]
    }
);

module.exports = mongoose.model('HostCity', hostCitiesSchema);
