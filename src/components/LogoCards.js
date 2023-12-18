import React, { useMemo } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logoData from './logoData.json';

 function LogoCards (){
    const settings = useMemo(() => {
      return {
         autoplay: true,
        speed: 1500,
         autoplaySpeed: 1500,
         cssEase: "linear",
        dots: true,
        infinite: true,
        arrows:false,
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true, 
        verticalSwiping: true, 
        swipeToSlide: true,
        pauseOnHover: true,
      };
    }, []);
    return (
        <div className='relative left-[60vw] top-[3vw]'>
        <Slider {...settings}>
          {logoData.map((d) => (
             <div className="relative w-[40vw] h-[8.1875vw]">
             <div className="flex  w-[11.5vw] h-[8.1875vw] gap-[0.625vw]absolute bg-[url('./logoImg/logo1.png')] bg-contain bg-center">
             </div>
             <div className="absolute h-[1vw] top-[2.8125vw] left-[13.5625vw] [font-family:'Archivo-ExtraLight',Helvetica] font-extralight text-white text-[0.9375vw] text-center tracking-[0.09375rem] leading-[normal] whitespace-nowrap">
              {d.detail}
             </div>
             <div className="absolute h-[1vw] top-[4.3125vw] left-[13.5625vw] [font-family:'Archivo-ExtraLight',Helvetica] font-extralight text-white text-[0.9375vw] text-center tracking-[0.09375vw] leading-[normal] whitespace-nowrap">
               {d.about}
             </div>
           
           </div>
          ))}
            
        </Slider>
     
     </div>
      );
    }
    export default LogoCards
  
