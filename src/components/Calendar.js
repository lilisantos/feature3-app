import React, { useState } from 'react';
import CalendarTemplate from 'availability-calendar-react';
 
export default function CalendarSet() {
  const [availability, setAvailability] = useState([])
  const Calendar = CalendarTemplate({
    availability,
    setAvailability: update => {
        setAvailability(update)
    },
    primaryColor: "#00c5c0",
    secondaryColor: "#DF1B1B",
    primaryFontColor: "#444444",
    fontFamily: "Roboto",
    fontSize: 12,
    startTime: "8:00",
    endTime: "20:00"
  })
 
  return (
    <div>
      <Calendar />
    </div>
  );
}
 

