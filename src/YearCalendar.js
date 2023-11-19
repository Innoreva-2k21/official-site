import './App.css';
import React from 'react';

const YearCalendar = () => {
  
  const months = [
    { name: 'January',   days: 31 ,    markedDates: [1, 30] },
    { name: 'February',  days: 28 ,    markedDates: [15] }, 
    { name: 'March',     days: 31 ,    markedDates: [12]},
    { name: 'April',     days: 30 ,    markedDates: [0]},
    { name: 'May',       days: 31 ,    markedDates: [0]},
    { name: 'June',      days: 30 ,    markedDates: [0]},
    { name: 'July',      days: 31 ,    markedDates: [0]},
    { name: 'August',    days: 31 ,    markedDates: [0]},
    { name: 'September', days: 30 ,    markedDates: [9]},
    { name: 'October',   days: 31 ,    markedDates: [0]},
    { name: 'November',  days: 30 ,    markedDates: [0]},
    { name: 'December',  days: 31 ,    markedDates: [0]},
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const getFirstDayOfWeek = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

      return (
        <yearCalendar>
          <div className='newdiv'>
                <div className='contents'>
                    <h1 className=' events text-white  uppercase 
                                font-extrabold
                             font-sans'>events
                    </h1>
                </div>
            
            <div className="calendar-grid">
              {months.map((month, index) => {
                const firstDayOfWeek = getFirstDayOfWeek(2023, index); // Assuming the year is 2023
                const emptyPlaceholders = Array.from({ length: firstDayOfWeek }, (_, i) => (
                  <div className="calendar-day empty" key={`empty-${i}`} />
                ));
                
                return (
                  <div className='parent-calendar-month'>
                    <div className="calendar-month" key={index}>
                      <h2>{month.name}</h2>
                      <div className="calendar-days">
                        {dayNames.map((day, dayIndex) => (
                          <div className="calendar-day" key={dayIndex}>
                            {day}
                          </div>
                        ))}
                        {emptyPlaceholders}
                        {Array.from({ length: month.days }, (_, day) => (
                          <div
                            className={`calendar-day ${month.markedDates.includes(day + 1) ? 'marked' : ''}`}
                            key={day + 1}
                          >
                            {day + 1}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </yearCalendar>
      );
      };

export default YearCalendar;


