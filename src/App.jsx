import { useState } from 'react';
import Achievements from './components/Achievements';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen md:flex-col">
      <div className="absolute w-[100px] h-[200px] my-0 p-0 top-0 left-0 rotate-90 [-webkit-text-stroke:2px_#ffffff80] [font-family:'Archivo-ExtraBold',Helvetica] font-extrabold text-transparent text-[80px] text-center tracking-[13.10px]">
      ACHIEVEMENTS
    </div>
      <div className="flex flex-col flex-1 mx-48">
        <Achievements/>
      </div>
    </div>
  );
}

export default App;
