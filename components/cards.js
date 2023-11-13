import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import data from './data.json'
function Cards() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    return (
      <div className='w-4/5 ml-40'>
        <div className="mt-20">
        <Slider {...settings}>
          {data.map((d) => (
            <div className="inline-flex items-start gap-[10px] flex-[0_0_auto] relative">
            <div className="w-[278px] h-[382px] rounded-[15px] bg-[#6e6e6e] relative" />
            <div className="border-2 border-solid border-white w-[259px] left-[10px] top-[8px] h-[366px] rounded-[15px] absolute" />
            <div className="w-[130px] left-[74px] top-[61px] h-[130px] rounded-[65px] absolute bg-cover bg-center" style={{ backgroundImage: `url(${d.img})` }}>
          </div>
            <div className="border-2 border-solid border-white w-[160px] left-[59px] top-[46px] h-[160px] rounded-[80px] absolute" />
            <div className="[font-family:'Archivo-Bold',Helvetica] w-[65px] left-[107px] tracking-[0] text-[20px] top-[250px] text-white h-[32px] font-bold leading-[normal] absolute">
              {d.name}
            </div>
            <div className="[font-family:'Archivo-Medium',Helvetica] w-[142px] left-[68px] tracking-[0] text-[12px] top-[271px] text-white h-[32px] font-medium leading-[normal] absolute">
              {d.currentProfession}
            </div>
            <p className="[font-family:'Archivo-Regular',Helvetica] w-[217px] left-[31px] tracking-[0] text-[11.5px] top-[294px] text-white h-[52px] font-normal text-center leading-[normal] absolute">
              {d.review}
            </p>
          </div>
          ))}
        </Slider>
        </div>
      </div>
    );
  }
  
  
  
  export default Cards;