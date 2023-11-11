import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Sidebar />
      <div className="fixed top-12 left-7 w-[456px] h-[57px]">
        <div className="w-[456px] h-[57px] [font-family:'Archivo-SemiBold',Helvetica] font-semibold text-white text-[20px] tracking-[0] leading-[32px]" style={{ marginLeft: '-5px' }}>
          WHO ARE WE?
        </div>
        <div className="w-[669px] h-[151px] [font-family:'Archivo',Helvetica] text-white text-[16px] tracking-[0] leading-[24px] text-justify" style={{ marginLeft: '150px' }}>
          Team Innoreva is a research-oriented team that places a strong emphasis on providing innovative and cutting-edge solutions to challenges faced by the real world.
        </div>
        <div className="w-[456px] h-[57px] [font-family:'Archivo-SemiBold',Helvetica] font-semibold text-white text-[20px] tracking-[0] leading-[32px]" style={{ marginLeft: '40px' }}>
        WHAT’S OUR PURPOSE ?
        </div>
        <div className="w-[669px] h-[151px] [font-family:'Archivo',Helvetica] text-white text-[16px] tracking-[0] leading-[24px] text-justify" style={{ marginLeft: '150px' }}>
        Team Innoreva fosters a creative and innovative environment for developing groundbreaking solutions. We integrate various domains of technology and push the boundaries of technological advancements.
        </div>
        <div className="w-[456px] h-[57px] [font-family:'Archivo-SemiBold',Helvetica] font-semibold text-white text-[20px] tracking-[0] leading-[32px]" style={{ marginLeft: '80px' }}>
        WHAT ARE OUR MAIN DOMAIN ?