import flowerPot from '../assets/5e88b52117aa40baa6a96e43b5c4e57858edaa47.png'
import { Search } from 'lucide-react';
import { useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";

const NavBar = () => {
  const [open, setOpen] = useState(false)
  return (
    <nav className="relative text-white">
      <div className="container mx-auto flex items-center justify-between  px-4 py-2 w-full">
        <a href="#hero-section" className="flex gap-2 items-center">
          <img src={flowerPot} alt="flowerPot" className='w-12 h-12' />
          <h1 className="text-2xl md:text-3xl font-extrabold">FloraVision.</h1>
        </a>

        <ul className="hidden lg:flex items-center gap-10 ">
          <a href="#hero-section" className="flex items-center gap-2 cursor-pointer font-['Indie_Flower'] text-2xl">
            Home
          </a>
          <a
            href="#top-selling-plant"
            className="flex items-center gap-2 cursor-pointer font-['Indie_Flower'] text-2xl"
          >
            Plants Type <IoMdArrowDropdown />
          </a>
          <li className="cursor-pointer  font-['Indie_Flower'] text-2xl">More</li>
          <a href="#contact" className="flex items-center gap-2 cursor-pointer font-['Indie_Flower'] text-2xl">
            Contact
          </a>

        </ul>

        <div className="flex gap-6 items-center">
          <Search className="cursor-pointer" />
          <IoBagHandleOutline size={24} className="cursor-pointer" />
          <button className="flex flex-col items-end justify-center gap-2 cursor-pointer" onClick={() => setOpen(!open)}>
            <span className="h-0.5 md:h-1 w-6 bg-white rounded-full"></span>
            <span className="h-0.5 md:h-1 w-4 bg-white rounded-full"></span>
          </button>

        </div>
      </div>
      {open && (
        <div className="absolute left-0 top-full z-50 w-full px-6 py-6 lg:hidden bg-[rgba(27,35,22,1)]/50 backdrop-blur-md ">
          <ul className="flex flex-col gap-6 text-xl font-['Indie_Flower']">
            <a href="#hero-section" className="flex items-center gap-2 cursor-pointer font-['Indie_Flower'] text-2xl">
              Home
            </a>
            <a
              href="#top-selling-plant"
              className="flex items-center gap-2 cursor-pointer font-['Indie_Flower'] text-2xl"
            >
              Plants Type <IoMdArrowDropdown />
            </a>
            <li>More</li>
            <a href="#contact" className="flex items-center gap-2 cursor-pointer font-['Indie_Flower'] text-2xl">
              Contact
            </a>
          </ul>
        </div>
      )}
    </nav >
  )
}

export default NavBar