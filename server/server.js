const express = require('express');
const app = express();

const travelOptions = {
    destionations: ["New York", "Paris", "Tokyo"],
    travelModes: ["Car", "Plane", "Train"],
    accommodations: ["Hotel", "Hostel", "Airbnb"],
}

const userInfo = {
    name: ["Taha Tariq" , "Esat Gokcen", "Varun Kumar"],
    age: [21, 23, 26],
    passport: ["123456789", "987654321", "456789123"],
    travelHistory: [
        { destination: "New York", date: "2022-01-01" },
        { destination: "Paris", date: "2022-06-15" },
        { destination: "Tokyo", date: "2023-03-10" }
    ]
}   

app.get('/api/travel-options', (req, res) => {
    res.json(travelOptions);
});

app.get('/api/user-info', (req, res) => {
    res.json(userInfo);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})