import React ,{useState} from 'react';
import './App.css';

function Heading(){
    return(
        <heading>
            <div className='bg-neutral-950 h-100 w-100 flex-auto justify-start'>
            <div className='yearName-style'>
                <h1 className=' yearName text-white uppercase decoration-10 text-5xl flex justify-center items-center my-1.5 font-bold tracking-widest '>&lt; 2023 &gt;</h1>
            </div>
            
            <div className='contents'>
                <h1 className=' events text-white text-opacity-50 uppercase flex 
                     items-start leading-6 tracking-widest absolute  font-extrabold
                     font-sans text-center text-9xl ml-px rotate-90'>events</h1>
            </div>
            


           
            </div>
      </heading>
    );
}

export default Heading;