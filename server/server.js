const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the CORS middleware
const Trip = require('./models/Trip'); // Import Trip model

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/travelPlanner')
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

// Existing GET route for travel options
app.get('/api/travel-options', (req, res) => {
  const options = {
    destinations: ["New York", "Paris", "Tokyo"],
    travelModes: ["Car", "Plane", "Train"],
    accommodations: ["Hotel", "Hostel", "Airbnb"]
  };
  res.json(options);
});

// Modify the POST route to save trips to MongoDB
app.post('/api/submit-trip', (req, res) => {
  const tripData = req.body;
  const newTrip = new Trip(tripData);
  
  newTrip.save()
    .then(() => res.send(`Trip planned to ${tripData.destination} by ${tripData.travelMode}`))
    .catch(err => res.status(500).send('Error saving trip: ' + err.message));
});

// New GET route to retrieve all saved trips
app.get('/api/trips', (req, res) => {
  Trip.find()
    .then(trips => res.json(trips))
    .catch(err => res.status(500).send('Error retrieving trips: ' + err.message));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});