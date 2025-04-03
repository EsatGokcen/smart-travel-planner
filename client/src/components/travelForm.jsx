import './travelFrom.css';
import {useEffect, useState} from 'react';

function TravelForm() {

    const TravelForm = () => {
        const [destionation, setDestination] = useState('');
        const [travelMode, setTravelMode] = useState('');
        const [accommodation, setAccommodation] = useState('');
        const [options, setOptions] = useState({destinations: [], travelModes: [], accommodations: []});
        const [userInfo, setUserInfo] = useState({name: '', age: '', passport: '', travelHistory: []});
    }

    useEffect(() => {
        fetch('http://localhost:3000/api/travel-options')
        .then(res => res.json())
        .then(data => setOptions(data))
        .catch(err => console.error(err));
    }, []);

    return (
        <div class="travel-form">
            <h1>Travel Booking Form</h1>
            
            <label for="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your full name" />
            
            <label for="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" />
            
            <label for="destination">Destination</label>
            <select id="destination">
            <option value="">Select destination</option>
            <option value="paris">Paris</option>
            <option value="new-york">New York</option>
            <option value="tokyo">Tokyo</option>
            <option value="london">London</option>
            </select>
            
            <label for="date">Travel Date</label>
            <input type="date" id="date" />
            
            <button type="submit">Book Now</button>
      </div>
    )
}

export default TravelForm;