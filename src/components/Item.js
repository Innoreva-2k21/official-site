import React from 'react'
import Gallary from './Gallary'
import one from './Image/one.png'

const Item = () => {
  return (
    <div>
      <h1 className='gallery'>GALLERY</h1>
      <h5 className='innoreva'>TEAM INNOREVA</h5>
      <h5 className='candids'>Candids</h5>
      <div className="box1"></div>
      <h5 className='moments'>Moments</h5>
      <h5 className='relived'>TO BE RELIVED</h5>
      <p className="text1">YOU CAN'T GO WITHOUT SEEING THESE !</p>
      <div className="box2"><Gallary/></div>
      <h2 className='one'><img src={one} alt="" /></h2>
      <p className="text2">The Alumni Meet organized by NIT Jamshedpur on 28th January 
      was a remarkable event that brought together former students 
      and current members of Team Innoreva, the official IoT and 
      Robotics team of the institute. It was a joyous reunion that 
      provided a platform for interaction and exchange between experienced
      alumni and aspiring students.
      </p>
      <div className="arrow"><p>DRAG FOR MORE</p></div>
    </div>
  )
}

export default Item

// link paste in html file
// <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide|Sofia|Trirong|Tilt Prism" />
  //<link rel="preconnect" href="https://fonts.googleapis.com">
 // <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
 // <link href="https://fonts.googleapis.com/css2?family=Bungee+Outline&family=Josefin+Sans&family=Poppins:wght@100&display=swap&family=Ballet:opsz@16..72&display=swap" rel="stylesheet">
 // <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link> */}

  // <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>