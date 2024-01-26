import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Sidebar />
      <div className="fixed top-12 left-7 w-[28rem] h-[3.5rem]">
        <div className="w-[28rem] h-[3.5rem] [font-family:'Archivo-SemiBold',Helvetica] font-semibold text-white text-[1.25rem] tracking-[0] leading-[2rem]" style={{ marginLeft: '-0.3125rem' }}>
          WHO ARE WE?
        </div>
        <div className="w-[41.8125rem] h-[9.1875rem] [font-family:'Archivo',Helvetica] text-white text-[1rem] tracking-[0] leading-[1.5rem] text-justify" style={{ marginLeft: '9.375rem' }}>
          Team Innoreva is a research-oriented team that places a strong emphasis on providing innovative and cutting-edge solutions to challenges faced by the real world.
        </div>
        <div className="w-[28rem] h-[3.5rem] [font-family:'Archivo-SemiBold',Helvetica] font-semibold text-white text-[1.25rem] tracking-[0] leading-[2rem]" style={{ marginLeft: '2.5rem' }}>
          WHAT’S OUR PURPOSE?
        </div>
        <div className="w-[41.8125rem] h-[9.1875rem] [font-family:'Archivo',Helvetica] text-white text-[1rem] tracking-[0] leading-[1.5rem] text-justify" style={{ marginLeft: '9.375rem' }}>
          Team Innoreva fosters a creative and innovative environment for developing groundbreaking solutions. We integrate various domains of technology and push the boundaries of technological advancements.
        </div>
        <div className="w-[28rem] h-[3.5rem] [font-family:'Archivo-SemiBold',Helvetica] font-semibold text-white text-[1.25rem] tracking-[0] leading-[2rem]" style={{ marginLeft: '5rem' }}>
          WHAT ARE OUR MAIN DOMAINS?
        </div>
        <div className="w-[41.8125rem] h-[9.1875rem] [font-family:'Archivo',Helvetica] text-white text-[1rem] tracking-[0] leading-[1.5rem] text-justify" style={{ marginLeft: '9.375rem' }}>
          Since its formation in 2018, the team has been dedicated to exploring the domains of IOT, ROBOTICS, WEB/APP DEVELOPMENT, and MACHINE LEARNING/AI.
        </div>
      </div>
    </>
  );
}

export default App;
