import { Navbar, LandingSection, HeroSection, MissionIcons, FooterWithSocialLinks} from "./components";

import TextCard from "./components/TextCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <LandingSection />
        <HeroSection/>
        <MissionIcons/>
        
        <TextCard/>
<FooterWithSocialLinks/>
      </main>
    </div>
  );
}

export default App;
