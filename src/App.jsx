import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10 ml-[8rem]">
      <div className="mb-6 text-[1.15rem] font-semibold text-white sm:text-[1.5rem] lg:text-[2rem] text-left">
  WHO ARE WE?</div>
  
        <div className="mb-6 text-[0.8rem] text-white sm:text-[1.25rem] lg:text-[1.5rem] text-justify">
          Team Innoreva is a research-oriented team that places a strong emphasis on providing innovative and cutting-edge solutions to challenges faced by the real world.
        </div>
        <div className="mb-6 text-[1.15rem] font-semibold text-white sm:text-[1.5rem] lg:text-[2rem] text-left">
          WHAT’S OUR PURPOSE?
        </div>
        <div className="mb-6 text-[0.8rem] text-white sm:text-[1.25rem] lg:text-[1.5rem] text-justify">
          Team Innoreva fosters a creative and innovative environment for developing groundbreaking solutions. We integrate various domains of technology and push the boundaries of technological advancements.
        </div>
        <div className="mb-6 text-[1.15rem] font-semibold text-white sm:text-[1.5rem] lg:text-[2rem] text-left">
          WHAT ARE OUR MAIN DOMAINS?
        </div>
        <div className="text-[1rem] text-white sm:text-[1.25rem] lg:text-[1.5rem] text-justify">
          Since its formation in 2018, the team has been dedicated to exploring the domains of IOT, ROBOTICS, WEB/APP DEVELOPMENT, and MACHINE LEARNING/AI.
        </div>
      </div>
    </div>
  );
}

export default App;
