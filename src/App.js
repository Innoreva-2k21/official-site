import logo from './logo.svg';
import './App.css';
import Hero from './components/hero';
import Heading from './components/Heading';
import 'react-calendar/dist/Calendar.css';
import YearCalendar from './components/YearCalendar';
import Item from './components/Item';

function App() {
  return (
    <div className="">
      <Hero/>
      <Heading/>
      <YearCalendar/>
    </div>
  );
}

export default App;
