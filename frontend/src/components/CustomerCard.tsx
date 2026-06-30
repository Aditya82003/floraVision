import Star from '../components/ui/star'
type CustomerCardProps = {
    name: string;
    avatar: string;
    rating: number;
    quote: string;
};

const CustomerCard = ({
    name,
    avatar,
    rating,
    quote,
}: CustomerCardProps) => {
    return (
        <div className='relative w-[350px] md:w-[400px] h-[300px] rounded-[40px] bg-[#262E22] backdrop-blur-md  text-white shadow-b-2xl overflow-hidden'>
            <div className='absolute bottom-[89%] left-1/2 -translate-x-1/2 z-10 w-[28rem] h-[25rem] rounded-full bg-[rgba(27,35,22,1)]'/>
            <div className="w-full h-full rounded-[40px] bg-[#262E22] backdrop-blur-md p-12 text-white drop-shadow-2xl ">

                <div className="flex items-center gap-4">
                    <img
                        src={avatar}
                        alt={name}
                        className="h-16 w-16 rounded-full object-cover"
                    />

                    <div>
                        <h2 className="text-xl font-semibold">{name}</h2>

                        <div className="mt-1 flex">
                            <Star value={rating} className='text-amber-300' />
                        </div>
                    </div>
                </div>

                <p className="mt-6 text-sm text-gray-300 leading-5">
                    {quote}
                </p>
            </div>
        </div>
    );
};

export default CustomerCard;