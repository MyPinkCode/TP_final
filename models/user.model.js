const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    nom: { type: String, required: [true, "last name required"]},
    prenom: { type: String, required: [true, "first name required"]},
    login: { type: String, required: [true, "login required"], unique: true },
    mdp: { type: String, required: [true, "password required"]},
    date: { type: Date, default: Date.now() },
});


// Export the model
module.exports = mongoose.model('user', UserSchema);