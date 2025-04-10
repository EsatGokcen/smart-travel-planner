const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    destination: {type: String, required: true},
    travelMode: {type: String, required: true},
    accommodation: {type: String, required: true},
    date: {type: Date, default: Date.now}
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;