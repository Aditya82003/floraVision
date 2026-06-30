import TreadyPlant1 from '../assets/b48312dbddc890f7f35ef3964ae1e7900b89782c.png'
import { RiShoppingBag4Line } from "react-icons/ri";

const TreadyPlant = () => {
    return (
        <div className='relative z-10 h-screen w-full  text-white px-12'>
            <div className='w-full flex justify-center'>
                <h1
                    className="relative inline-block text-6xl font-semibold font-['Inter']
                before:content-['']
                before:absolute
                before:-bottom-3
                    before:-left-3
                    before:w-16
                    before:h-16
                    before:border-b-5
                    before:border-l-5
                    before:rounded-bl-3xl
                    before:border-lime-200

  after:content-['']
  after:absolute
  after:-right-4
  after:w-16
  after:h-16
  after:border-t-5
  after:border-r-5
  after:rounded-tr-3xl
  after:border-lime-200"
                >
                    Our Trendy plants
                </h1>
            </div>
            <div className='relative w-full flex  bg-white/10 backdrop-blur-md mt-12 rounded-[100px] py-12'>
            <div className='flex-1'>
                <img src={TreadyPlant1} alt="tready plant 1" className='absolute -top-2/3 left-0 w-[500px] h-[500px]'/>
            </div>
            <div className='flex-1 flex flex-col gap-4 w-1/2'>
                <h2 className='text-4xl tracking-wide font-semibold'>For More Desk Decorative</h2>
                <p className='font-light text-lg max-w-[600px] leading-6'>I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!</p>
                <h1 className='text-4xl font-semibold'>Rs. 599 /-</h1>
                <div className='flex gap-4 '>
                    <button className='w-36 h-12 text-xl  tracking-wide border rounded-xl'>Explore</button>
                    <div className='flex justify-center items-center w-12 h-12 border rounded-xl'><RiShoppingBag4Line size={24} /></div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default TreadyPlant