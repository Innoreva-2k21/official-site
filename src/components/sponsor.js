
import React from "react";
import LogoCards from "./LogoCards";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Sponsor = () => {
  return (
    <div className="w-[85vw] h-[55vw] overflow-x-hidden">       
            <div className="absolute w-[25vw] h-[10.4375vw] top-[6.5vw] left-[8.4vw] font-bold text-white text-[3vw] text-center tracking-[0.4375vw] leading-[normal]">
              INNOREVA
            </div>
            <div className="absolute w-[25vw] h-[8.1875vw] top-[9.7vw] left-[9vw] font-bold text-white text-[3vw] text-center tracking-[0.4375vw] leading-[normal]">
            INVESTORS
            </div>
            <div className="absolute w-[25vw] h-[2.75vw] top-[13.5vw] left-[8.9vw] font-medium text-white text-[1.125vw] text-center tracking-[0.16vw] leading-[normal]">
              HELPING IN THE BETTERMENT
            </div>
            <div className="absolute w-[25vw] h-[2.75vw] top-[28vw] left-[10.7vw] font-normal text-white text-[1.125vw] text-center tracking-[0.125vw] leading-[normal]">
              DONATE TOWARDS THE BETTERMENT
            </div>
            <FontAwesomeIcon className="absolute w-[3vw] h-[1.1vw] top-[28.35vw] left-[34.1vw] text-white" icon={faArrowRight} />
            <LogoCards />
          </div>
  );
};

export default Sponsor;
