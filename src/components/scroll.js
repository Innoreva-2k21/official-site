import React from "react";

export default function scroll() {
  return (
    <div className="flex flex-col pt-[42px] h-[160px] items-center justify-center ">
      <div className="w-[200px] h-[200px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="189"
          height="69"
          viewBox="0 0 189 69"
          fill="none"
        >
          <mask id="path-1-inside-1_814_236" fill="white">
            <path d="M0.932953 63.4142C8.40202 44.4143 21.5074 28.1557 38.4882 16.8228C55.469 5.48999 75.5116 -0.3741 95.923 0.0184937C116.334 0.411087 136.137 7.04155 152.669 19.019C169.202 30.9964 181.672 47.747 188.405 67.02L184.991 68.2125C178.502 49.6364 166.482 33.4916 150.548 21.9472C134.613 10.4029 115.527 4.01219 95.8535 3.63379C76.1801 3.2554 56.8623 8.90744 40.4955 19.8305C24.1287 30.7536 11.4972 46.4243 4.29822 64.7371L0.932953 63.4142Z" />
          </mask>
          <path
            d="M0.932953 63.4142C8.40202 44.4143 21.5074 28.1557 38.4882 16.8228C55.469 5.48999 75.5116 -0.3741 95.923 0.0184937C116.334 0.411087 136.137 7.04155 152.669 19.019C169.202 30.9964 181.672 47.747 188.405 67.02L184.991 68.2125C178.502 49.6364 166.482 33.4916 150.548 21.9472C134.613 10.4029 115.527 4.01219 95.8535 3.63379C76.1801 3.2554 56.8623 8.90744 40.4955 19.8305C24.1287 30.7536 11.4972 46.4243 4.29822 64.7371L0.932953 63.4142Z"
            stroke="white"
            stroke-width="4"
            mask="url(#path-1-inside-1_814_236)"
          />
        </svg>
      </div>
      <div className="absolute animate-bounce mt-[-20}">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="42"
          viewBox="0 0 24 42"
          fill="none"
        >
          <path
            d="M10.9393 41.0607C11.5251 41.6464 12.4749 41.6464 13.0607 41.0607L22.6066 31.5147C23.1924 30.9289 23.1924 29.9792 22.6066 29.3934C22.0208 28.8076 21.0711 28.8076 20.4853 29.3934L12 37.8787L3.51472 29.3934C2.92893 28.8076 1.97919 28.8076 1.3934 29.3934C0.807611 29.9792 0.807611 30.9289 1.3934 31.5147L10.9393 41.0607ZM10.5 0L10.5 20H13.5L13.5 0L10.5 0ZM10.5 20V40H13.5V20H10.5Z"
            fill="white"
          />
        </svg>
      </div>
      
    </div>
  );
}