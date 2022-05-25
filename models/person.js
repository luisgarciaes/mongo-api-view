const mongoose = require('mongoose')
let PersonSchema = new mongoose.Schema({
    name: String,
    age: Number,
    bloodType: String,
    ssn: String
})
module.exports = mongoose.model('Persons', PersonSchema)