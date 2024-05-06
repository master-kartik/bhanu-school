import React from "react";
import data from "../Data";
export default function FeaturedImageGallery() {
 
  const [active, setActive] = React.useState(
    data[0].imgelink,
  );
 
  return (
    <div className="grid gap-4 mb-10 pt-10 pb-10 px-20 justify-center items-center bg-[#FFF7F1]">
        <div className='text-5xl tracking-tighter font-norma text-center mb-10 text-[#111C2C]'>School Spotlight</div>
        
      <div>
        <img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center shadow-md md:h-[480px]"
          src={active}
          alt=""
        />
      </div>
      <div className="grid grid-cols-5 gap-10 ">
        {data.map(({ imgelink }, index) => (
          <div className=""key={index}>
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center shadow-md"
              alt="gallery"
            />
          </div>
        ))}
      </div>
    </div>
  );
}