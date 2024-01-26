

import React from 'react';

const Sidebar = () => {
    return (
        <div className="relative bg-[#050816]"style={{ marginLeft: '-40px' }}>
            <div className="absolute w-[5rem] h-[10rem] my-0 p-0 top-150 left-50 rotate-90 [-webkit-text-stroke:2px_#ffffff80] [font-family:'Archivo-ExtraBold',Helvetica] font-extrabold text-transparent text-[80px] text-center tracking-[15.0px]"style={{ marginTop: '-50px' }}>
                {` ABOUT `}
            </div>
            <div className="absolute w-[5rem] h-[10rem] my-0 p-0 top-150 left-50 rotate-90 [-webkit-text-stroke:2px_#ffffff80] [font-family:'Archivo-ExtraBold',Helvetica] font-extrabold text-transparent text-[80px] text-center tracking-[15.0px]" style={{ marginTop: '390px' }}>
                {`US`}
            </div>
        </div>
    );
}

export default Sidebar;
