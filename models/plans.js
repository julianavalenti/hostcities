const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const planSchema = new Schema(
    {
        city: { type: String },
        todo:{ type: String },
        comments: { type: String },
        
    }
)
            

const Plan = mongoose.model('Plan', planSchema);

module.exports = Plan;