import React from 'react'

const HeroSection = ({title,decription}) => {
  return (
    <div className='flex flex-col w-full my-10 px-5 lg:px-10 text-center items-center'>
        <div className='text-5xl tracking-tighter justify-center text-left lg:text-center font-normal text-[#111C2C]'>{title}</div>
        <div className='text-md my-4 lg:w-2/3 text-[#9C9998] tracking-tight text-left lg:text-center'>{decription}
</div>
    </div>
  )
}

export default HeroSection