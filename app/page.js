import Image from "next/image";
import HeaderNav  from "./components/HeaderNav";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <HeaderNav />
    <div className="w-10/12 mt-36 mx-auto  py-4">
      <HeroSection />
    </div>
    <div className="bg-black w-full">
      <div className="w-10/12 mx-auto">
        <AboutSection/>
      </div>    
    </div>

    <div className="bg-blue-950 w-full">
      <div className="w-10/12 mx-auto">
        <AboutSection flipped = {true} />
      </div>    
    </div>
    
    <Footer />
  </main>
  );
}
