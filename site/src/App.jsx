import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col h-screen overflow-hidden md:flex-row">
      <Sidebar />
      <div className="w-[100px] h-[131px]">
        <div className="fixed w-[465px] h-[131px] bottom-40 left-40 [font-family:'Archivo-Regular',Helvetica] font-normal text-white text-[17px] text-center tracking-[2.00px] leading-[normal]">
          DONATE TOWARDS THE BETTERMENT &rarr;
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <div className="w-[100px] h-[131px] p-6">
          <div className="fixed w-[400px] h-[131px]  top-20 left-40 [font-family:'Archivo-Bold',Helvetica] font-bold text-white text-[55px] text-center tracking-[7.00px] leading-[normal] ">
            INNOREVA INVESTORS
          </div>
        </div>

    
        <div className="w-[100px] h-[131px] " >
          <div className="fixed w-[400px] h-[131px] top-50 left-40 p-10  [font-family:'Archivo-Medium',Helvetica] font-medium text-white text-[20px] text-center tracking-[3px] leading-[normal]">
            HELPING IN THE BETTERMENT
          </div>
        </div>
      </div>

      <div className="w-[100px] mt--10 ml-40">
        <div className="fixed w-[300px] top-50 left-100 p-6">
          
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <div style={{ marginRight: '10px' }}>
              <img src="src/image folder/logo.jpeg" alt="LOGO" style={{
                width: '100%', 
                height: '100%', 
                borderRadius: '10px', 
              }} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <span className="[font-family:'Archivo-Regular',Helvetica] text-white text-[18px] tracking-[2.50px] leading-[normal]">
                DETAILS
              </span>
              <p className="[font-family:'Archivo-Regular',Helvetica] text-gray-500 text-[15px] tracking-[2.00px] leading-[normal]">
                 about the investor
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <div style={{ marginRight: '10px' }}>
              <img src="src/image folder/logo.jpeg" alt="LOGO" style={{
                width: '100%', 
                height: '100%', 
                borderRadius: '10px', 
              }} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <span className="[font-family:'Archivo-Regular',Helvetica] text-white text-[18px] tracking-[2.50px] leading-[normal]">
              DETAILS
              </span>
              <p className="[font-family:'Archivo-Regular',Helvetica] text-gray-500 text-[15px] tracking-[2.00px] leading-[normal]">
              about the investor
              </p>
            </div>
          </div>
<div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <div style={{ marginRight: '10px' }}>
              <img src="src/image folder/logo.jpeg" alt="LOGO" style={{
                width: '100%', 
                height: '100%', 
                borderRadius: '10px', 
              }} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <span className="[font-family:'Archivo-Regular',Helvetica] text-white text-[18px] tracking-[2.50px] leading-[normal]">
              DETAILS
              </span>
              <p className="[font-family:'Archivo-Regular',Helvetica] text-gray-500 text-[15px] tracking-[2.00px] leading-[normal]">
              about the investor
              
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <div style={{ marginRight: '10px' }}>
              <img src="src/image folder/logo.jpeg" alt="LOGO" style={{
                width: '100%', 
                height: '100%', 
                borderRadius: '10px', 
              }} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <span className="[font-family:'Archivo-Regular',Helvetica] text-white text-[18px] tracking-[2.50px] leading-[normal]">
              DETAILS
              </span>
              <p className="[font-family:'Archivo-Regular',Helvetica] text-gray-500 text-[15px] tracking-[2.00px] leading-[normal]">
              about the investor
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <div style={{ marginRight: '10px' }}>
              <img src="src/image folder/logo.jpeg" alt="LOGO" style={{
                width: '100%', 
                height: '100%', 
                borderRadius: '10px', 
              }} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <span className="[font-family:'Archivo-Regular',Helvetica] text-white text-[18px] tracking-[2.50px] leading-[normal]">
              DETAILS
              </span>
              <p className="[font-family:'Archivo-Regular',Helvetica] text-gray-500 text-[15px] tracking-[2.00px] leading-[normal]">
              about the investor
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
