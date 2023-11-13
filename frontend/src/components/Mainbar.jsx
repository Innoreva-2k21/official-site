import Robot from "../assets/Robot.svg";
import Ellipse from "../assets/Ellipse.svg";
import Ellipse1 from "../assets/Ellipse1.svg";
import Vector1 from "../assets/Vector1.svg";
import Vector2 from "../assets/Vector2.svg";
import Vector3 from "../assets/Vector3.svg";
import Vector4 from "../assets/Vector4.svg";

const Mainbar = () => {
  return (
    <div className=" relative h-screen w-full flex justify-center ">
      <div className="flex flex-col h-screen w-96 ">
        <div className=" relative w-full h-[32rem] ">
          <img src={Robot} alt="" className=" absolute z-20 mt-24" />
          <img
            src={Ellipse}
            alt="not found"
            className=" absolute ml-5  z-10 mt-10"
          />
          <img
            src={Ellipse1}
            alt="not found"
            className=" absolute -ml-5 z-10 mt-72"
          />

          <img
            src={Vector1}
            alt="not found"
            className=" absolute -ml-12 z-30 mt-40"
          />
          <img
            src={Vector2}
            alt="not found"
            className=" absolute ml-64 z-30 mt-48"
          />
          <img
            src={Vector3}
            alt="not found"
            className=" absolute  ml-56 z-30 mt-[21rem]"
          />
          <img
            src={Vector4}
            alt="not found"
            className=" absolute -ml-5 z-30 mt-[23rem]"
          />

          <p className=" absolute -ml-60 w-44 text-justify mt-36">
            Raspberry pi affordable, compact development processor board
          </p>
          <p className=" absolute ml-[386px] w-44 text-justify mt-44">
          Aluminum hands with a non rusting steel claws 
          </p>
          <p className=" absolute ml-[402px] w-44 text-justify mt-80">
          General Electric GE9X engine for the easy flight process 
          </p>
          <p className=" absolute -ml-48 w-44 text-justify mt-[26rem]">
          Inbuilt sensor legs which detect the obstacles in the paths 
          </p>
        </div>

          <div className=" w-full mt-6 text-center h-2 uppercase font-[Archivo] font-bold text-2xl">Flying Toro</div>
          <div className=" w-full mt-6  h-fit text-center ">A FLYING ROBOT WITH ARTIFICIAL INTELLIGENCE . IT HAS A CHIP INTEGRATED IN IT WHICH ALLOWS IT TO EXPLORE INTERNET </div>
      </div>
      <div className=" absolute bottom-24 w-full flex justify-center items-center">
        <div className="  m-5 text-3xl font-bold "> 1/2 </div>
        <div className=" w-2/3 border-2"></div>
        <span className=" m-5 text-3xl font-bold">&lt;</span>
        <span className="  text-3xl font-bold"> &gt;</span>
      </div>
    </div>
  );
};

export default Mainbar;
// <div className=" z-20 flex w-full h-screen   items-center ">
//   <img src={Robot} alt="" className=" border mx-auto block" />
// </div>
// <div className=" flex w-full h-screen  items-center ">
//   <img
//     src={Ellipse}
//     alt=""
//     className=" mx-auto block "
//   />
// </div>
