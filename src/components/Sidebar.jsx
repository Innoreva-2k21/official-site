import React from 'react';

const Sidebar = () => {
    return (
<div className=" bg-[#050816]">
      <div className="fixed w-[100px] h-[200px] my-0 p-0 top-0 left-0 rotate-90 [-webkit-text-stroke:2px_#ffffff80] [font-family:'Archivo-ExtraBold',Helvetica] font-extrabold text-transparent text-[80px] text-center tracking-[13.10px]">
      {` ABOUT `}

      </div>
      <div className="fixed w-[100px] h-[200px] my-0 p-0 top-0 left-0 rotate-90 [-webkit-text-stroke:2px_#ffffff80] [font-family:'Archivo-ExtraBold',Helvetica] font-extrabold text-transparent text-[80px] text-center tracking-[13.10px]"style={{ marginTop: '450px' }}>
      {`US`}
      </div>
    </div>
   );
}

export default Sidebar;
