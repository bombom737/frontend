import { handleScroll } from "@/hooks/handleScroll";
import { RefObject } from "react";

interface Props {
  aboutRef: RefObject<HTMLDivElement>;
}

function LandingPage({ aboutRef }: Props) {
  return (
    <div className="flex w-[100vw] h-[100vh] bg-[#fafafa] overflow-x-hidden !mr-[19rem]">
      <div className="flex-col h-full w-[100vw] bg-[url('/shimon-landing-page.jpg')] bg-cover bg-no-repeat bg-left !p-10 !mr-[19rem]">
        <div className='relative text-white top-1/2 translate-y-[-50%] !pl-[40px] !pr-[40px]'>
          <div className='!p-10 flex flex-col gap-6'>
            <h1 className='text-4xl text-[#2ba6ec]'>Hello, I'm</h1>
            <span className='text-7xl drop-shadow-2xl font-bold font-[Playfair_Display]'>Shimon Pinto</span>
            <h1 className='text-4xl drop-shadow-2xl text-[#d4d4d4]'>Glad to see you here.</h1>
            <div className="float-left w-[200px] h-[70px] flex items-center justify-center !mt-5">
              <a
                className="rounded-md bg-[#2ba6ec] flex items-center justify-center h-full w-full font-bold transition-all duration-500 ease-in-out hover:bg-[#2462b3]"
                onClick={() => handleScroll(aboutRef)}
              >
                <span className='text-lg'>About Me</span>
              </a>
            </div>
            <div>
              <h1 className='font-bold text-lg w-[300px] drop-shadow-2xl'>"I find in artworks, and especially in paintings, intertextual truths, and this truth—whatever it may be—has the power to fulfill a promise in which opposites coexist in harmony, in a way that refreshes and to surprises logic."</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
