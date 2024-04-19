
import Image from "next/image";
import AboutSection from "../components/AboutSection";
import HeaderNav  from "../components/HeaderNav";
export default function Page() {
  return(
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <HeaderNav />
      <div className="w-10/12 mt-36 mx-auto  py-4">
     
     
        <AboutSection />
      </div>

    </main>
  );
  }