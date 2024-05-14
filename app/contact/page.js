
import Image from "next/image";
import Email from "../components/EmailSection";
import HeaderNav  from "../components/HeaderNav";
export default function Page() {
  return(
      <main className=" max-w-128 mx-auto flex min-h-screen flex-col bg-[#121212]">
        <HeaderNav />
      <div className="w-10/12 mt-36 mx-auto  py-4">
     
     
        <Email />
      </div>

    </main>
  );
  }