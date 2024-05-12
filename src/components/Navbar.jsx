
const Navbar = () => {
  
  return (
    <div className="flex items-center left-1/2 transform -translate-x-1/2 text-[#111C2C] justify-between bg-opacity-20  backdrop-blur-md fixed w-4/5 my-2 rounded-lg  bg-[#B3BFC4] z-50 py-4 px-8 shadow-md">
      
      <div className="nleft flex -gap-1 items-center text-lg tracking-tighter cursor-pointer font-bold z-10">Bhanu School</div>
    
      <div className="flex gap-5 cursor-pointer text-sm"> 
    {["Home", "About", "Academics", "Community"].map((data, index)=>(

            <a href="/" key={index}>{data}</a>
    ))}
      </div>

    

    </div>
  )
}

export default Navbar