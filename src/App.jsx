

import { Navbar, FooterWithSocialLinks } from "./components";
import { Outlet } from "react-router-dom";
import LocomotiveScroll from 'locomotive-scroll';
import SNavbar from "./components/SNavbar";






function App() {
  const locomotiveScroll = new LocomotiveScroll();
 
  return (
    <div>
      <SNavbar/>
        {/* <Navbar /> */}
      
        <Outlet />
        <FooterWithSocialLinks/>
      
    </div>
  );
}

export default App;
