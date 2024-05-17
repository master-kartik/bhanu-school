

import { Navbar, FooterWithSocialLinks } from "./components";
import { Outlet } from "react-router-dom";
import LocomotiveScroll from 'locomotive-scroll';






function App() {
  const locomotiveScroll = new LocomotiveScroll();
 
  return (
    <div>
        <Navbar />
      
        <Outlet />
        <FooterWithSocialLinks/>
      
    </div>
  );
}

export default App;
