import React ,{useState} from 'react';
import './App.css';
import YearCalendar from './YearCalendar';
import 'react-calendar/dist/Calendar.css';
import Heading from './Heading';

function App() {
  
  return (
    <>
     <Heading />
     <YearCalendar />
    </> 
  );
}

export default App;
