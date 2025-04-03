import './travelFrom.css';
import {useEffect, useState} from 'react';

function TravelForm() {
    
    const [options, setOptions] = useState({destinations:[], travelModes:[], accommodations:[]});
    // const [userInfo, setUserInfo] = useState({name: '', age: '', passport: '', travelHistory: []});

    useEffect(() => {
        fetch('http://localhost:3000/api/travel-options')
        .then(res => res.json())
        .then(data => setOptions(data))
        .catch(err => console.error(err));
    }, []);

    return (
        <div className="travel-form">
            <h1>Travel Booking Form</h1>
            
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your full name" />
            
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" />
            
            <label htmlFor="destination">Destination</label>
            <select id="destination">
            <option >Select destination</option>
            {options.destinations.map((dest) => (
                <option key={dest} value={dest}>{dest}</option>
            ))}
            </select>
            
            <label htmlFor="date">Travel Date</label>
            <input type="date" id="date" />
            
            <button type="submit">Book Now</button>
      </div>
    )
}

export default TravelForm;