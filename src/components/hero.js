import '../App.css';
import Nav from'./nav.js';
import Scroll from './scroll.js'

function Hero() {
  return (
    <div className=' flex flex-col items-center justify-center h-auto w-screen pt-[35px] ' style={{backgroundColor:'#000016'}} >
      <Nav />
      
      <div className="mt-[4%]  top-0 left-0 [font-family:'Anek_Devanagari-Regular',Helvetica] font-normal text-white text-[20px] text-center tracking-[20.00px] leading-[normal]">
        NIT JAMSHEDPUR
      </div>
    
      <div className='flex h-fit w-[90%] justify-center mt-2'>
      <svg  xmlns="http://www.w3.org/2000/svg" width="85%" height="60%"  viewBox="0 0 1217 417" fill="none">
  <path d="M3.8158e-05 417L-7.63161e-06 9.71932H43.7183L43.7184 417H21.0061H3.8158e-05Z" fill="white"/>
  <path d="M68.776 417V9.71932H101.723L187.892 286.948L183.457 169.161V9.71932H222.107V417H190.004L106.581 137.457L109.115 240.203V417H68.776Z" fill="white"/>
  <path d="M246.306 417V9.71932H279.253L365.423 286.948L360.988 169.161V9.71932H399.637V417H367.535L284.111 137.457L286.645 240.203V417H246.306Z" fill="white"/>
  <path d="M501.508 417C482.922 417 468.209 412.526 457.367 403.578C446.666 394.63 438.993 381.131 434.346 363.082C429.841 345.032 427.588 322.431 427.588 295.279V115.705C427.588 92.2552 429.7 71.8912 433.924 54.6126C438.148 37.3341 445.681 23.9123 456.522 14.3474C467.364 4.78246 482.711 0 502.564 0C517.489 0 529.668 2.7769 539.102 8.33073C548.535 13.7303 555.786 21.5211 560.855 31.7031C566.065 41.7309 569.655 53.8413 571.626 68.0344C573.598 82.2275 574.583 98.1176 574.583 115.705V295.279C574.583 322.431 572.33 345.032 567.825 363.082C563.46 381.131 555.927 394.63 545.226 403.578C534.666 412.526 520.094 417 501.508 417ZM501.508 375.809C509.534 375.809 515.658 373.341 519.882 368.404C524.106 363.313 526.993 354.905 528.542 343.18C530.09 331.456 530.865 315.643 530.865 295.741V112.928C530.865 88.5527 529.105 70.5028 525.585 58.778C522.065 47.0533 514.391 41.1909 502.564 41.1909C490.314 41.1909 482.007 47.0533 477.642 58.778C473.418 70.3485 471.306 88.3213 471.306 112.696V295.741C471.306 315.797 472.081 331.687 473.63 343.412C475.178 354.982 478.135 363.313 482.5 368.404C486.865 373.341 493.201 375.809 501.508 375.809Z" fill="white"/>
  <path d="M600.474 414.894V7.61384H678.406C698.118 7.61384 712.691 11.4707 722.125 19.1843C731.558 26.7437 737.683 38.237 740.499 53.6643C743.456 68.9373 744.934 88.2215 744.934 111.517C744.934 136.663 742.611 156.642 737.965 171.452C733.318 186.262 724.307 195.827 710.931 200.147C717.69 201.381 723.251 204.543 727.616 209.634C732.122 214.725 735.642 222.67 738.176 233.47C740.71 244.269 742.47 258.77 743.456 276.975C744.582 295.024 745.146 317.78 745.146 345.24C745.146 347.863 745.146 351.643 745.146 356.579C745.146 361.516 745.216 366.916 745.357 372.778C745.498 378.64 745.216 384.538 745.357 390.246C745.638 395.954 745.357 400.933 745.779 405.407C745.779 410.973 745.357 413.214 746.409 414.894H703.539C701.638 414.894 702.906 410.189 702.483 405.407C702.061 400.624 702.765 394.53 702.483 386.663C702.202 378.795 701.99 369.461 701.85 358.662C701.709 347.709 701.638 335.521 701.638 322.099C701.638 308.523 701.638 293.713 701.638 277.669C701.638 262.241 701.005 250.517 699.738 242.495C698.611 234.318 695.795 228.687 691.29 225.602C686.925 222.362 679.885 220.433 670.17 219.816L644.192 218.197V414.894H600.474ZM644.192 183.022H672.07C680.096 183.022 686.221 181.325 690.445 177.931C694.81 174.383 697.766 167.441 699.315 157.104C700.864 146.614 701.638 130.955 701.638 110.128V107.351C701.638 90.0728 700.864 77.0367 699.315 68.2431C697.907 59.2953 695.091 53.2786 690.867 50.1932C686.643 47.1077 680.237 45.565 671.648 45.565H644.192V183.022Z" fill="white"/>
  <path d="M774.628 417V9.71932H885.719V49.5217H818.346V188.83H882.129V228.633H818.346V377.198H886.564V417H774.628Z" fill="white"/>
  <path d="M967.866 415.611L905.985 8.33073H947.591L972.301 180.731L993.421 332.304H994.266L1012.64 180.731L1033.97 8.33073H1075.16L1018.77 415.611H967.866Z" fill="white"/>
  <path d="M1046.56 415.611L1102.95 8.33075H1155.54L1217 415.611H1175.82L1165.26 337.858H1097.88L1088.17 415.611H1046.56ZM1102.74 298.981H1159.76L1130.41 83.7703H1129.77L1102.74 298.981Z" fill="white"/>
</svg>
</div>

<div className=" mt-[11px]  top-0 left-0 [font-family:'Anek_Devanagari-Regular',Helvetica] font-normal text-white text-[20px] text-center tracking-[20.00px] leading-[normal]">
        A CHANGE FOR A CHANGE
      </div>
      <Scroll/>
      
    </div>
  );
}

export default Hero;
