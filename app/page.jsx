import Image from "next/image";
import HeaderNav  from "./components/HeaderNav";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import MissionSection from "./components/MissionSection"
import EmailSection  from "./components/EmailSection";
import {auth} from "@/auth";
import Features from "./components/Features/Features";
import { SessionProvider } from "next-auth/react";

export default async function Home() {
  const session = await auth();
  return (
  
    <main className="max-w-128 mx-auto flex min-h-screen flex-col bg-[#121212]">
      
      <HeaderNav />
 
   
    <div className="w-10/12 mt-36 mx-auto  py-4 md:py-44 ">
      <HeroSection />


        <MissionSection/>

        <Features/>

        <AboutSection/>
        <AboutSection flipped = {true} />
        <EmailSection/>

{/* in case we want to change bg color this is the code
    <div className="bg-sky-950 w-full">
      <div className="w-10/12 mx-auto">
       
      </div>    
  </div> */}

   

    </div>
    <Footer />
  </main>
  );
}
