import logo from './logo.png'
const Navbar = () => {
  return (
    <div className="flex items-center text-[#111C2C] justify-between fixed w-full bg-[#B3BFC4] bg-opacity-40 py-4 px-8"><div className="flex -gap-1 items-center text-lg tracking-tighter cursor-pointer font-bold"><img src={logo} className="w-[3vw]" alt="logo" />Bhanu School</div>
    

        <ul className="flex gap-5 cursor-pointer text-sm">
            <li>Home</li>
            <li>About</li>
            <li>Acaedemics</li>
            <li>Community</li>
        </ul>

    </div>
  )
}

export default Navbar