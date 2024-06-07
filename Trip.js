import React, { useState } from 'react';
import './MyTripPage.css'; // Import CSS file

const MyTripPage = () => {
  // State to manage trip information
  const [trips, setTrips] = useState([
    {
      id: 1,
      destination: 'Mahalakshmi Mandir',
      date: 'June 1 2024',
      activities: 'Visiting, Travel, Break-fast, Lunch'
    },
    {
      id: 2,
      destination: 'Jyotiba Temple',
      date: 'July 2 2024',
      activities: 'Visiting, Travel, Break-fast, Lunch'
    },
    {
      id: 3,
      destination: 'Rankala Lake',
      date: 'July 3 2024',
      activities: 'Visiting, Travel, Break-fast, Lunch, Swimming, Boating'
    },
    {
      id: 4,
      destination: 'Panhala Fort',
      date: 'July 4 2024',
      activities: 'Visiting, Travel, Break-fast, Lunch, Trekking, Dinner'
    }
  ]);

  // Function to delete a trip
  const deleteTrip = (id) => {
    setTrips(trips.filter(trip => trip.id !== id));
  };

  return (
    <div className="my-trip-page">
      <h1> Make My Trip</h1>
      <div className="trip-list">
        {trips.map(trip => (
          <div key={trip.id} className="trip">
            <h2>{trip.destination}</h2>
            <p>Date: {trip.date}</p>
            <p>Activities: {trip.activities}</p>
            <button onClick={() => deleteTrip(trip.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTripPage;
