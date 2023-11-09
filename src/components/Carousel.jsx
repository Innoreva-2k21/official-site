import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <div className='w-1/1 ml-[35px] pt-[100px]'>
      <div className="mt-20">
      <Slider {...settings}>
        {data.map((d) => (
            <div key={d.por} className="bg-white h-[350px] text-black rounded-xl">
                <div className='h-52 bg-white flex justify-center items-center rounded-t-xl'>
                    <img src={d.img} alt="" className="h-44 w-44 rounded-full"/>
                </div>

                <div className="flex flex-col items-center justify-center gap-3 p-4">
                    <p className="text-xl [font-family:'Archivo-SemiBold',Helvetica]">{d.name}</p>
                    <p className="text-center [font-family:'Archivo-SemiBold',Helvetica] font-medium">{d.por}</p>
                    <button className='bg-[#050816] text-white text-sm px-6 py-1 rounded-xl'>Know More</button>
                </div>
            </div>
          
        ))}
      </Slider>
      </div>
      
    </div>
  );
}

const data = [
  {
    por: `Professor Incharge`,
    img: `https://picsum.photos/200/300`,
    name: `Dr. Jayendra Kumar `
  },
  {
    por: `Captain`,
    img: `https://picsum.photos/200/300`,
    name: `Harshit Kumar`
  },
  {
    por: `Vice-Captain`,
    img: `https://picsum.photos/200/300`,
    name: `Ritesh Kumar Jaiswal`
  },
  {
    por: `App Head`,
    img: `https://picsum.photos/200/300`,
    name: `Subhadip`
  },
  {
    por: `IOT Head`,
    img: `https://picsum.photos/200/300`,
    name: `MSV`
  },
  
];

export default Carousel;
