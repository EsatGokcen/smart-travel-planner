function TravelForm() {
    return (
        <div className="travel-form">
            <h1>Travel Form</h1>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Age:
                    <input type="number" name="age" />
                </label>
                <label>
                    Passport Number:
                    <input type="text" name="passport" />
                </label>
                <label>
                    Destination:
                    <select name="destination">
                        {/* Options will be populated here */}
                    </select>
                </label>
                <label>
                    Travel Mode:
                    <select name="travelMode">
                        {/* Options will be populated here */}
                    </select>
                </label>
                <label>
                    Accommodation:
                    <select name="accommodation">
                        {/* Options will be populated here */}
                    </select>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default TravelForm;