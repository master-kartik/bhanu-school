import React from 'react';

const MissionIcons = () => {
  return (
    <div className='flex w-[98vw] justify-center items-center h-full'>
      <div className='w-full flex mt-0 mb-20 justify-center align-middle items-center'>
        <div className='flex gap-10'>
          <div className='flex flex-col items-center'>
            <div className='icon w-[3vw]'><img src="https://img.icons8.com/ios-glyphs/90/admission.png" alt="admission" /></div>
            <div className='text-xs text-[#9C9998] my-2 w-3/4 font-bold text-center leading-[0.9rem]'>Admission Open 2024-2025</div>
          </div>

          <div className='flex flex-col items-center'>
            <div className='icon w-[3vw]'><img src="https://img.icons8.com/wired/64/curriculum.png" alt="curriculum"/></div>
            <div className='text-xs text-[#9C9998] my-2 w-3/4 text-center  font-bold leading-[0.9rem]'>Curricullum for 2024-2025</div>
          </div>

          <div className='flex flex-col items-center'>
            <div className='icon w-[3vw]'><img src="https://img.icons8.com/ios-glyphs/90/people-skin-type-7.png" alt="people-skin-type-7"/></div>
            <div className='text-xs text-[#9C9998] my-2 w-3/4 text-center font-bold leading-[0.9rem]'>Meet our excellent faculties</div>
          </div>

          <div className='flex flex-col items-center'>
            <div className='icon w-[3vw]'><img src="https://img.icons8.com/ios-glyphs/90/event-accepted.png" alt="event-accepted"/></div>
            <div className='text-xs text-[#9C9998] my-2 w-3/4 font-bold text-center leading-[0.9rem]'>Upcoming Events</div>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default MissionIcons;
