import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Sidebar />
      <div className="fixed top-12 left-7 w-[456px] h-[57px]">
        <div className="w-[669px] h-[151px] [font-family:'Archivo',Helvetica] text-white text-[16px] tracking-[0] leading-[24px] text-justify" style={{ marginLeft: '300px', position: 'relative' }}>
          <div className="number" style={{ position: 'absolute', top: '20px', left: '-120px', fontSize: '80px' }}>0{count + 1}</div>
          In the vast landscape of technological innovation, Team Innoreva etched its mark as a rising star. Earning a place of honor among the top 20 teams across Pan-India in the prestigious TATA Grand Indian IOT Innovation Challenge of 2018.
        </div>
        <div className="w-[800px] h-[50px] py-6">
          <div id="LineRoot" className="border-solid py-6 border-white w-full h-2px border-t border-b-0 border-x-0" style={{ marginLeft: '150px'}}></div>
        </div>

        <div className="w-[669px] h-[151px] [font-family:'Archivo',Helvetica] text-white text-[16px] tracking-[0] leading-[24px] text-justify" style={{ marginLeft: '300px', position: 'relative' }}>
          <div className="number" style={{ position: 'absolute', top: '15px', left: '-120px', fontSize: '80px' }}>0{count + 2}</div>
          In 2019, Team Innoreva proudly reached the finals of the Smart India Hackathon. The astute problem-solving and ingenious thinking of our team members set us apart from others.
        </div>
        <div className="w-[800px] h-[50px] py-6">
          <div id="LineRoot" className="border-solid py-6 border-white w-full h-2px border-t border-b-0 border-x-0" style={{ marginLeft: '150px' }}></div>
        </div>

        <div className="w-[669px] h-[151px] [font-family:'Archivo',Helvetica] text-white text-[16px] tracking-[0] leading-[24px] text-justify" style={{ marginLeft: '300px', position: 'relative' }}>
          <div className="number" style={{ position: 'absolute', top: '20px', left: '-120px', fontSize: '80px' }}>0{count + 3}</div>
          In the year 2019, Team Innoreva achieved a significant milestone by publishing two IEEE conference papers focused on IoT. These contributions demonstrated our team's dedication to advancing the field's knowledge and impact in the domain of IoT.
        </div>
        <div className="w-[800px] h-[50px] py-6">
          <div id="LineRoot" className="border-solid py-6 border-white w-full h-2px border-t border-b-0 border-x-0" style={{ marginLeft: '150px' }}></div>
        </div>

        <div className="w-[669px] h-[151px] [font-family:'Archivo',Helvetica] text-white text-[16px] tracking-[0] leading-[24px] text-justify" style={{ marginLeft: '300px', position: 'relative' }}>
          <div className="number" style={{ position: 'absolute', top: '20px', left: '-120px', fontSize: '80px' }}>0{count + 4}</div>
          The year 2020 witnessed remarkable triumph of Team Innoreva's members at NIT Jamshedpur's SIH 2020 internal hackathon. Four out of seven positions were claimed by participants from our team. Through their skills and innovative thinking, they secured 1st and 2nd spots in both the software and hardware categories.
        </div>
        <div className="w-[800px] h-[50px] py-6">
          <div id="LineRoot" className="border-solid py-6 border-white w-full h-2px border-t border-b-0 border-x-0" style={{ marginLeft: '150px' }}></div>
        </div>
      </div>
    </>
  );
}

export default App;
