
import { Navbar, FooterWithSocialLinks } from "./components";
import { Outlet } from "react-router-dom";




function App() {
  return (
    <div>
        <Navbar />
      
        <Outlet />
        <FooterWithSocialLinks/>
      
    </div>
  );
}

export default App;
