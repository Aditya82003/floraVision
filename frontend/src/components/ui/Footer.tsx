import { Link } from "react-router";
import footerImg from "../../assets/5e88b52117aa40baa6a96e43b5c4e57858edaa47.png";
import Button from "./Button";

const Footer = () => {
  return (
    <footer id="contact" className="container mx-auto px-6 py-12 text-white">
      <div className="flex flex-col gap-12 md:flex-row md:justify-between">

        <div className="flex flex-col gap-6 md:max-w-md">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <img
              src={footerImg}
              alt="FloraVision Logo"
              className="h-14 w-14 object-contain md:h-16 md:w-16"
            />

            <h1 className="text-4xl font-bold">FloraVision.</h1>
          </div>

          <p className="text-center md:text-left text-base md:text-xl leading-7 text-gray-300">
            &quot;From lush indoor greens to vibrant outdoor blooms, our plants are
            crafted to thrive and elevate your living environment.&quot;
          </p>
        </div>

        <div className="text-center md:text-left">
          <h2 className="mb-6 text-2xl font-semibold">Quick Link&apos;s</h2>

          <ul className="space-y-4 text-gray-300 text-xl">
            <li className="cursor-pointer hover:text-green-400 transition underline">
              Home
            </li>
            <li className="cursor-pointer hover:text-green-400 transition underline">
              Type&apos;s of Plant&apos;s
            </li>
            <li className="cursor-pointer hover:text-green-400 transition underline">
              Contact
            </li>
            <li className="cursor-pointer hover:text-green-400 transition underline">
              Privacy Policy
            </li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h2 className="mb-6 text-2xl font-semibold">For Every Updates.</h2>

          <div className="flex border p-[2px]">
            <input
              type="text"
              placeholder="Enter Email"
              className="w-full bg-transparent px-4 py-2 text-gray-300 outline-none"
            />
            <Button variant="solid" className=" text-[rgba(27,35,22,1)] hover:text-green-700">Subscribe</Button>

          </div>
        </div>
      </div>


      <div className="flex flex-col items-center justify-between gap-4 mt-[5rem] md:flex-row">
        <div className="flex gap-6">
          <Link to="#"><span className="font-extrabold text-2xl tracking-wide">FB</span></Link>
          <Link to="#"><span className="font-extrabold text-2xl tracking-wide">TW</span></Link>
          <Link to="#"><span className="font-extrabold text-2xl tracking-wide">LI</span></Link>

        </div>
        <p className="font-semibold text-xl text-white">FloraVision @ all copyrights reserve</p>


      </div>
    </footer>
  );
};

export default Footer;