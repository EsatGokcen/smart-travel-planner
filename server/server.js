const express = require('express');
const app = express();

const travelOptions = {
    destionations: ["New York", "Paris", "Tokyo"],
    travelModes: ["Car", "Plane", "Train"],
    accommodations: ["Hotel", "Hostel", "Airbnb"],
}

app.get('/api/travel-options', (req, res) => {
    res.json(travelOptions);
});