import React from "react";

const Contact = () => {
  return (
    <div className="relative w-screen h-screen">
      <div className="h-[30vh] top-[5vh] left-[2vw] absolute w-[80vw]">
        <div className="h-[25vh] top-0 left-0 absolute w-[80vw]">
          <div className="fixed w-[50vw] h-[10vw] bottom-[27rem] left-0 font-extrabold text-white text-[7vw] text-center tracking-[0] leading-[normal]">
            Contact Us
          </div>
          <p className="fixed w-[40vw] h-[7vh] bottom-[22rem] left-[5vw] font-normal text-white text-[1.0rem] text-center tracking-[0] leading-[normal]">
            If you have any questions related to our club or work or experiencing any technical difficulties, please do not hesitate to contact us.
          </p>
          <input className="fixed w-[35vw] h-[2.5rem] bottom-[23rem] p-2.5 left-[55vw] bg-[#9b9b9b]"type="text" placeholder="Name"/>
          <div className="fixed w-[8vw] h-[3vw] bottom-[26rem] left-[55vw] rows-[10] font-medium text-white text-[1.2rem] pb-6">
            Name
          </div>
          <input  className="fixed w-[35vw] h-[2.5rem] bottom-[16rem] p-2.5 left-[55vw] bg-[#9b9b9b]" type="email" placeholder="Email"/>
          <div className="fixed w-[8vw] h-[3vw] bottom-[19rem] left-[55vw] rows-[10] font-medium text-white text-[1.2rem] pb-6">
            Email
          </div>
          <img className="fixed w-[1.2rem] h-[4vw] bottom-[16.5rem] left-[9vw] " alt="Vector" src="/Vector.svg" />
          <img className="fixed w-[1.2rem] h-[4vw] bottom-[13.5rem] left-[9vw]" alt="Vector" src="/facebook2.svg" />
          <img className="fixed w-[1.2rem] h-[4vw] bottom-[7.5rem] left-[9vw]" alt="Vector" src="/phone.svg" />
          <img className="fixed w-[1.2rem] h-[4vw] bottom-[10.3rem] left-[9vw] " alt="Vector" src="/email.svg"/>
          <div className="fixed w-[8vw] h-[4vw] bottom-[16rem] left-[12vw] font-semibold text-white text-[1.2rem]">
            team_innoreva_nitjsr
          </div>
          <div className="fixed w-[50vw] h-[4vw] bottom-[13rem] left-[12vw] font-semibold text-white text-[1.2rem]">
            Team Innoreva, NIT Jamshedpur
          </div>
          <div className="fixed w-[8vw] h-[4vw] bottom-[10rem] left-[12vw] font-semibold text-white text-[1.2rem] ">
            teaminnoreva@nitjsr.ac.in
          </div>
          <div className="fixed w-[8vw] h-[4vw] bottom-[7rem] left-[12vw] font-semibold text-white text-[1.2rem]">
            0000000000
          </div>
          <textarea className="fixed w-[35vw] h-[6.5rem] bottom-[5rem] p-2.5 left-[55vw] bg-[#9b9b9b]" type="text" placeholder="Message"/>
          <div className="fixed w-[8vw] h-[3vw] bottom-[12rem] left-[55vw] rows-[10] font-medium text-white text-[1.2rem] pb-6">
            Message
          </div>
          <p className="fixed w-[20vw] h-[1rem] bottom-[2rem] left-[34vw] font-light text-white text-[1.5vw] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Copyright 2023 All Rights Reserved @innoreva
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;