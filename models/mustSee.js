const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const mustSeeSchema = new Schema(
{
    name: { type: String },
    img: {type: String, required: false},
    openHours: { type: String },
    admissionFee: { type: String },
    category: { type: String },
    website: { type: String }
}
)
const MustSee = mongoose.model('MustSee', mustSeeSchema);
module.exports = MustSee