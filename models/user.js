const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const userSchema = Schema({
    name: { type: String, required: true},
    phone: {type: Number, required: true} ,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },

    saves: [
        {
            type: Schema.Types.ObjectId,ref: "MustSee"
        }
    ]
});

// User Model
const User = mongoose.model('User', userSchema);

// Export User Model
module.exports = User;