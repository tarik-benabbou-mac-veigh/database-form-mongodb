const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    nameDev : {type: String, required: true},
    positionDev : {type: String, required: true},
    ageDev : {type: Number},
    emailDev : {type: String, required: true},
});

module.exports = mongoose.model('User', UserSchema);