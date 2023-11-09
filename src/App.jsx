import { useState } from 'react'


import Sidebar from './components/Sidebar'
import Carousel from './components/Carousel'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sidebar/>
      <div className="mx-40 w-[1030px] h-[500px] flex-row">
        <div className=" absolute top-[70px] w-[400px] h-[100px]">
            <div className="w-[400px] h-[100px] [font-family:'Archivo-Bold',Helvetica] font-bold text-white text-[50px] text-center text-justify tracking-[0]">
              HOLA AMIGOS !
            </div>
        </div>
        <div className='absolute top-[160px] h-[50px] flex'>
            <div className="w-[230px] h-[50px] [font-family:'Archivo-SemiBold',Helvetica]font-semibold text-white text-[30px] text-justify tracking-[0]">
              POR HOLDERS
          </div>
          <div className="w-[900px] h-[50px] py-6">
            <div id="LineRoot" className="border-solid py-6 border-white w-full h-2px border-t border-b-0 border-x-0"/>
          </div>
        </div>
         <Carousel/> 
      </div>
        
    </>
      

    
  )
}

export default App
