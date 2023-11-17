
import React, { useEffect, useMemo } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from './data.json';

const Cards = () => {
  const settings =useMemo(()=> {
    return{
    dots: false,
    infinite: true,
    slidesToScroll: 1
    };
  },[]);

  // Function to dynamically set the number of slides to show based on screen width
  const getSlidesToShow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024) {
      console.log(3);
      return 4;
       // Show 3 slides for screens larger than or equal to 1024px
    } else if (screenWidth >= 768) {
      console.log(2);
      return 2; // Show 2 slides for screens larger than or equal to 768px
    } else {
      console.log(1);
      return 1; // Show 1 slide for smaller screens
    }
  };

  settings.slidesToShow = getSlidesToShow(); // Set initial slides to show

  useEffect(() => {
    const handleResize = () => {
      // Update slides to show when the window is resized
      settings.slidesToShow = getSlidesToShow();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [settings]);

  return (
    <div style={{ width: '82vw', marginLeft: '12vw' }}>
  <div style={{ marginTop: '2vw' }}>
    <Slider {...settings}>
      {data.map((d) => (
        <div style={{ display: 'flex', justifyContent: 'center' , gap: '0.1vw', flexWrap: 'wrap', position: 'relative' }}>
          <div style={{ width: '17.375vw', height: '23.875vw', borderRadius: '0.9375vw', backgroundColor: '#6e6e6e', position: 'relative' }}>
            {/* Additional components */}
            <div style={{ width: '16.1875vw', left: '0.625vw', top: '0.5vw', height: '22.875vw', borderRadius: '0.9375vw', border: '2px solid white', position: 'absolute' }} />
            <div style={{ width: '8.125vw', left: '4.625vw', top: '3.8125vw', height: '8.125vw', borderRadius: '4.0625vw', backgroundImage: `url(${d.img})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'absolute' }} />
            <div style={{ width: '10vw', left: '3.6875vw', top: '2.875vw', height: '10vw', borderRadius: '5vw', border: '2px solid white', position: 'absolute' }} />
            <div style={{ fontFamily: 'Archivo-Bold, Helvetica', width: '4.0625vw', left: '6.6875vw', letterSpacing: '0', fontSize: '1.25vw', top: '15.625vw', color: 'white', height: '2vw', fontWeight: 'bold', lineHeight: 'normal', position: 'absolute' }}>
              {d.name}
            </div>
            <div style={{ fontFamily: 'Archivo-Medium, Helvetica', width: '8.875vw', left: '4.25vw', letterSpacing: '0', fontSize: '0.75vw', top: '16.9375vw', color: 'white', height: '2vw', fontWeight: 'normal', lineHeight: 'normal', position: 'absolute' }}>
              {d.currentProfession}
            </div>
            <p style={{ fontFamily: 'Archivo-Regular, Helvetica', width: '13.5625vw', left: '1.9375vw', letterSpacing: '0', fontSize: '0.6875vw', top: '18.375vw', color: 'white', height: '3.25vw', fontWeight: 'normal', textAlign: 'center', lineHeight: 'normal', position: 'absolute' }}>
              {d.review}
            </p>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>

  );
}

export default Cards;

