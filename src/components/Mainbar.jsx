import Left from "../assets/Left.svg";
import Right from "../assets/Right.svg";
import Ss from "../assets/ss.png";


const Mainbar = () => {
  return (
    <div className=" relative h-full w-full  flex flex-col items-center justify-center p-2 ">                  
      <div className=" w-full h-[39rem] flex justify-center">
        <img src={Ss} alt="" className=" h-full w-auto object-center object-contain" />
      </div>
      <div className=" w-full h-[10%] text-center uppercase font-[Archivo] font-bold text-2xl flex items-end justify-center">Flying Toro</div>
      <div className=" w-full h-[10%] flex items-start justify-center px-32 text-center overflow-scroll text-sm">A FLYING ROBOT WITH ARTIFICIAL INTELLIGENCE . IT HAS A CHIP INTEGRATED IN IT WHICH ALLOWS IT TO EXPLORE INTERNET </div>
      <div className=" w-full h-[10%] flex items-center justify-center">
        <div className="  m-5 text-4xl font-bold "> 1/2 </div>
         <div className=" w-2/3 border-2"></div>
         <img src={Left} alt="" className=" -mr-5" />
         <img src={Right} alt="" className=" -mr-0" />
      </div>
    </div>
  );
};

export default Mainbar;


