import { NavLink } from "react-router-dom"

const Navbar = () => {
  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
     
    }); 
  }; 
  return (
    <div className="flex top-1 items-center left-1/2 transform -translate-x-1/2 text-[#111C2C] justify-between bg-opacity-20  backdrop-blur-md fixed w-[96vw] lg:w-4/5 mt-[0vw] rounded-lg  bg-[#B3BFC4] z-50 py-4 px-8 shadow-md">
      
      <NavLink to={'/'} onClick={scrollToTop} className="nleft flex -gap-1 items-center text-lg select-none tracking-tighter cursor-pointer font-bold z-10">Bhanu School</NavLink>
    
      <div className={`hidden md:flex gap-5 items-center`}> 
    {["About", "Academics", "Contact","Search"].map((data, index)=>(

      index === 3 ? (<i key={{index}} className="ri-search-line text-text  ml-6 cursor-pointer text-lg " ></i>) : (
  
        <NavLink key={{index}} onClick={scrollToTop} to={`/${data.toLocaleLowerCase()}`} ><div className="text-sm">{data}</div></NavLink>
      )
    )

            

            
            
    )}
      </div>

      

    </div>
  )
}

export default Navbar