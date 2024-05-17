import { NavLink } from "react-router-dom"

const Navbar = () => {
  
  return (
    <div className="flex items-center left-1/2 transform -translate-x-1/2 text-[#111C2C] justify-between bg-opacity-20  backdrop-blur-md fixed w-4/5 my-2 rounded-lg  bg-[#B3BFC4] z-50 py-4 px-8 shadow-md">
      
      <NavLink className="nleft flex -gap-1 items-center text-lg select-none tracking-tighter cursor-pointer font-bold z-10">Bhanu School</NavLink>
    
      <div className="flex gap-5 text-sm"> 
    {["Home", "About", "Academics", "Contact"].map((data, index)=>(

            // <a href="/" key={index}>{data}</a>
            
            <NavLink to={index===0 ? '/' : `/${data.toLocaleLowerCase()}`} >{data}</NavLink>
    ))}
      </div>

    

    </div>
  )
}

export default Navbar