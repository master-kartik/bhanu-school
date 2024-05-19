import React from "react";
import '../index.css'
import { NavLink } from "react-router-dom"

import {
  Collapse,
  IconButton,
 
} from "@material-tailwind/react";
 
export default function SNavbar() {
    
  const [openNav, setOpenNav] = React.useState(false);
  const [openSearch, setOpenSearch ] = React.useState(false);
  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'instant'
     
    })}; 
  
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <div className={` md:flex w-auto md:bg-transparent mb-0 h-screen md:h-auto text-center md:text-left  md:gap-5 items-center z-50 p-16 md:p-0 `}> 
    {["About", "Academics", "Contact","Search"].map((data, index)=>(

      index === 3 ? (<div className="flex  items-center">
        <input type="text" placeholder="Search" className={`${openSearch === true ? "md:inline-block" : "md:hidden"} input re input-bordered border-white border-opacity-70 md:placeholder:opacity-100 shadow-sm decoration-text focus:border-text outline-none md:placeholder:text-white placeholder:text-sm placeholder:font-thin rounded-md md:rounded-md w-[50vw] m-8 md:m-0 md:w-[10vw] text-sm text-text h-[5vh] md:bg-transparent md:h-[3vh] xl:h-[5vh] max-w-xs`} />
        <i key={{index}} onClick={()=>{
          setOpenSearch(!openSearch)
        }} className=" ri-search-line text-background md:text-text text-3xl  md:ml-2 cursor-pointer md:text-lg " ></i>
      </div>) : (
  
        <NavLink key={{index}}  to={`/${data.toLocaleLowerCase()}`} ><div
        onClick={() => {
          scrollToTop()
          setOpenNav(!openNav)
        }} className=" text-3xl hover:bg-dark hover:shadow-lg  md:hover:bg-transparent md:shadow-none md:hover:shadow-none p-6 md:p-0 rounded-lg shadow-sm md:mb-0 font-bold md:font-semibold tracking-tighter md:text-sm">{data}</div></NavLink>
      )
    )

            

            
            
    )}
      </div>

  )

  return (
    <div className="flex top-1 items-center left-1/2 transform -translate-x-1/2 text-[#111C2C] justify-between bg-opacity-20  backdrop-blur-md fixed w-[96vw] lg:w-4/5 mt-[0vw] rounded-lg  bg-[#B3BFC4] z-50 py-4 px-8">
   
       
        <NavLink to={'/'} onClick={()=>{
          scrollToTop()
          setOpenNav(false)
        }}  className="flex -gap-1 items-center text-lg select-none tracking-tighter cursor-pointer font-bold z-10">Bhanu School</NavLink>
        
          <div className="flex items-center justify-between gap-4">
            <div className="hidden md:block">
                {navList}
                
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        
       <div className="md:hidden absolute top-[60px] z-30 w-full w-screen-md mx-auto  left-1/2  transform -translate-x-1/2 text-background bg-text  bg-opacity-[99%] backdrop-blur-lg  rounded-lg  shadow-md">
       <Collapse  className="" open={openNav}>
          
          
          {navList}
         
        </Collapse>


       </div>
      
    </div>
  );
  }