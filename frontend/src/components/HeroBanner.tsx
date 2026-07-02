import { GoTriangleRight } from "react-icons/go";
import Aglaonema from "../assets/c8eb5b1abede1308e0eaf899d1f7faae62a0c2f6.png";
import RonnieAvvatar from '../assets/72419c36cae7ef6f9c25b97e39a231fc9059935c.png'
import Stars from "./ui/Star";
import Button from "./ui/Button";
import { MdArrowForwardIos } from "react-icons/md";

const HeroBanner = () => {
  return (
    <section id="hero-section" className="container mx-auto px-4 sm:px-6 lg:px-8 text-white pt-[5rem]">
      <div className="relative z-10 flex min-h-screen flex-col justify-center py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">


          <div className="flex flex-col justify-between gap-12 w-full lg:max-w-2xl">

            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold leading-tight">
                Earth&apos;s Exhale
              </h1>

              <p className="mt-5 max-w-xl text-sm sm:text-base md:text-lg lg:text-xl font-light leading-7 text-gray-200">
                &quot;Earth Exhale&quot; symbolizes the purity and vitality of the
                Earth&apos;s natural environment and its essential role in
                sustaining life.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">

                <Button className='text-xl font-extralight px-16 hover:text-black  '>Buy Now</Button>

                <button className="rounded-full border border-white p-3 hover:bg-white hover:text-black transition">
                  <GoTriangleRight size={24} />
                </button>

                <p className='cursor-pointer font-["Indie_Flower"] text-lg'>
                  Live Demo...
                </p>
              </div>
            </div>


            <div className="relative z-10 w-full  max-w-[26rem] rounded-4xl border border-white/10 bg-white/10 px-[2rem] py-12 backdrop-blur-[4px] mt-[10rem] before:content-[''] before:absolute before:inset-0 before:rounded-4xl before:border before:border-white/20 ">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-amber-100" >
                  <img src={RonnieAvvatar} alt="Avatar" className="w-full h-full object-cover rounded-full" />
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-light">
                    Ronnie Hamill
                  </h2>

                  <div className="mt-1 flex">
                    <Stars value={4.5} className='text-amber-300' />
                  </div>
                </div>
              </div>

              <p className="mt-5 text-lg sm:text-lg font-light leading-7 text-gray-200">
                I can't express how thrilled I am with my new natural plants!
                They bring such a fresh and vibrant energy to my home.
              </p>
            </div>
          </div>


          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">

            <img
              src={Aglaonema}
              alt="Aglaonema"
              className="relative z-10 mx-auto w-52 sm:w-64 md:w-72 lg:w-80 xl:w-96"
            />

            <div className="flex flex-col gap-[0.2rem] items-start px-[5rem]  -mt-20 rounded-[2rem] border border-white/20 bg-white/10 pt-28 pb-10 backdrop-blur-xl">
              <h3 className="text-lg sm:text-xl md:text-2xl font-light">
                Indoor Plant
              </h3>
              <div className="w-full flex items-center justify-between">
                <h2 className=" text-2xl sm:text-3xl md:text-4xl font-light">
                  Aglaonema Plant
                </h2>
                <MdArrowForwardIos size={24} />
                
              </div>
              <Button className="mt-2 w-[8rem] h-[3rem] hover:text-black">Explore</Button>
              <div className="flex gap-2 w-full items-center justify-center mt-[1rem]">
                <div className="w-5 h-2 rounded-full bg-white" />
                <div className="w-2 h-2 rounded-full bg-white" />
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default HeroBanner;