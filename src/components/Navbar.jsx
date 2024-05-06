
const Navbar = () => {
  
  return (
    <div className="flex items-center left-1/2 transform -translate-x-1/2 text-[#111C2C] justify-between bg-opacity-20  backdrop-blur-md fixed w-4/5 my-2 rounded-lg  bg-[#B3BFC4] z-50 py-4 px-8 shadow-md">
      
      <div className="flex -gap-1 items-center text-lg tracking-tighter cursor-pointer font-bold z-10">Bhanu School</div>
    

        <ul className="flex gap-5 cursor-pointer text-sm">
            <li className="">Home</li>
            <li>About</li>
            <li>Acaedemics</li>
            <li>Community</li>
        </ul>

    </div>
  )
}

export default Navbar