import { GoTriangleRight } from "react-icons/go";
import { MdOutlineStar } from "react-icons/md";
import Aglaonema from '../assets/c8eb5b1abede1308e0eaf899d1f7faae62a0c2f6.png'

const HeroBanner = () => {
    return (
        <>
            <section className="min-h-xl">
                <div className='relative z-10 p-4 md:p-12 md:py-20 h-[calc(100vh-80px)] '>
                    <div className='flex gap-4 justify-between w-full h-full text-white mt-22'>
                        <div className="flex flex-col justify-between ">
                            <div>
                                <h1 className='font-semibold text-5xl md:text-8xl '>Earth's Exhale</h1>
                                <p className='font-light text-lg md:text-xl w-full md:w-[600px] leading-6 mt-4'>"Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.</p>
                                <div className='flex gap-4 md:gap-6 mt-8'>
                                    <button className='border border-white rounded-xl py-2 px-8 text-xl font-light '>Buy Now</button>
                                    <div className='flex items-center justify-center p-2 rounded-full border border-white'><GoTriangleRight size={28} /></div>
                                    <p className='flex items-center font-["Indie_Flower"] text-lg tracking-tight cursor-pointer'>Live Demo...</p>
                                </div>
                            </div>
                            <div className='w-full md:w-[400px] h-50 rounded-4xl border backdrop-blur-md bg-white/10 p-6 flex flex-col justify-between gap-2'>
                                <div className='flex items-center gap-2'>
                                    <div className='w-12 h-12 bg-amber-50 rounded-full'></div>
                                    <div className='flex flex-col gap-1'>
                                        <h2 className='text-2xl font-light tracking-wide'>Ronnie Hamill</h2>
                                        <p className='flex gap-2'>
                                            <MdOutlineStar size={18} className='text-yellow-400' />
                                            <MdOutlineStar size={18} className='text-yellow-400' />
                                            <MdOutlineStar size={18} className='text-yellow-400' />
                                            <MdOutlineStar size={18} className='text-yellow-400' />
                                            <MdOutlineStar size={18} className='text-yellow-400' />
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <p className='font-extralight text-lg max-w-[300px]'>I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.</p>
                                </div>
                            </div>

                        </div>
                        <div className='relative hidden lg:block w-[400px] h-[600px]'>
                            <img src={Aglaonema} className='absolute z-10 -top-2/12 left-1/2 -translate-x-1/2' />
                            <div className='w-full h-full backdrop-blur-xl bg-white/10 rounded-4xl border'>
                                <div className='absolute top-1/2 w-full p-8 '>
                                    <h3 className='text-2xl tracking-wide font-light'>Indoor Plant</h3>
                                    <h1 className='mt-2 text-4xl font-light'>Aglonema Plant</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroBanner