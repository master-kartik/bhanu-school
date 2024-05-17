import { Carousel } from "@material-tailwind/react";
import data from "../Data";
export default function CarouselNew({classNames, nav}) {
  return (
    <Carousel autoplay="true"
    autoplayDelay="3000"
    loop="true"
      className={`${classNames}`}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className={`absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2`}>
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`${nav===1 ? "block" : "hidden" } h-1 cursor-pointer rounded-2xl  transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {data.map(({ imgelink }, index) => (

          <img
          key={index}
            className="h-[60vh] lg:h-[80vh] w-full object-cover"
            src={imgelink}
            alt="gallery"
          />
 
      ))}
      
      
    </Carousel>
  );
}