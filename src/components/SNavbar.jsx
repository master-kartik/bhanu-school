import React from "react";
import { NavLink } from "react-router-dom"
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
 
export default function SNavbar() {
    
  const [openNav, setOpenNav] = React.useState(false);
  
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <div className={`md:flex w-auto bg-background md:bg-transparent h-screen md:h-auto text-center md:text-left  gap-5 items-center p-16 md:p-0 `}> 
    {["About", "Academics", "Contact","Search"].map((data, index)=>(

      index === 3 ? (<i key={{index}} className="ri-search-line text-text  ml-6 cursor-pointer text-lg " ></i>) : (
  
        <NavLink key={{index}}  to={`/${data.toLocaleLowerCase()}`} ><div className="text-sm">{data}</div></NavLink>
      )
    )

            

            
            
    )}
      </div>

  )

  return (
    <div className="flex top-1 items-center left-1/2 transform -translate-x-1/2 text-[#111C2C] justify-between bg-opacity-20  backdrop-blur-md fixed w-[96vw] lg:w-4/5 mt-[0vw] rounded-lg  bg-[#B3BFC4] z-50 py-4 px-8 shadow-md">
   
       
        <NavLink to={'/'}  className="nleft flex -gap-1 items-center text-lg select-none tracking-tighter cursor-pointer font-bold z-10">Bhanu School</NavLink>
        
          <div className="flex items-center justify-between gap-4">
            <div className="hidden lg:block">
                {navList}
                
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
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
        
        <MobileNav  className="lg:hidden fixed top-[10vh] h-screen overflow-hidden" open={openNav}>
          {navList}
         
        </MobileNav>

      
    </div>
  );
}