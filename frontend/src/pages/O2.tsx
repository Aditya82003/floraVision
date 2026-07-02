import besto2 from '../assets/c8eb5b1abede1308e0eaf899d1f7faae62a0c2f6.png'
import Button from '../components/ui/Button'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import SectionHeading from '../components/ui/SectionHeading';
const O2 = () => {
    return (
        <section className='container mx-auto flex flex-col items-center my-[8rem] px-4'>
            <SectionHeading>Our Best o2</SectionHeading>
            <div className="w-full min-h-[500px] bg-[rgb(38,46,34)] mt-[5rem] md:mt[10rem] rounded-[6rem] border border-white/50">
                <div className="w-full h-full flex gap-2 py-8">
                    <div className='hidden relative w-1/2 h-full  md:flex items-center justify-center ' >
                        <img src={besto2} alt="" className='absolute left-0 -top-[9rem] w-[38rem] h-[38rem] object-contain' />
                    </div>
                    <div className='flex flex-col gap-6 w-full  md:w-1/2 max-w-[35rem] text-white py-12 px-6'>
                        <h1 className='text-2xl md:text-4xl font-semibold'>We Have Small And Best O2 Plants Collection&apos;s</h1>
                        <p className='text-lg md:text-xl font-semibold leading-6'>Oxygen-producing plants, often referred to as &quot;O2 plants,&quot; are those that release oxygen into the atmosphere through the process of photosynthesis.</p>
                        <p className='text-lg md:text-xl font-semibold leading-6'>Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.</p>
                        <div className='w-full flex justify-between items-center'>
                            <Button className='text-xl font-extralight px-8'>Explore</Button>
                            <div className='flex'>
                                <IoIosArrowBack className='text-2xl mr-[2rem]'/>
                                <span>01/04</span>
                                <IoIosArrowForward className='text-2xl ml-[2rem]'/>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex gap-4 mt-12'>
                <div className='w-10 h-2 bg-white rounded-full'/>
                <div className='w-2 h-2 bg-white rounded-full'/>
                 <div className='w-2 h-2 bg-white rounded-full'/>
            </div>

        </section>
    )
}

export default O2