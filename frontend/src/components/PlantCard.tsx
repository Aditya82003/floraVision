type PlantCardProps = {
    name: string;
    bio: string;
    price: number;
    image: string;
};
import { IoBagHandleOutline } from "react-icons/io5";

const PlantCard = ({ name, bio, price, image }: PlantCardProps) => {
    return (
        <div className="relative w-lg">

            <img src={image} alt={name} className="absolute w-[459px] h-[459px] left-1/2 -translate-x-1/2 z-20 -top-30" />

            <div className="relative w-full h-[644px] bg-[rgb(38,46,34)] rounded-[77px]  text-white overflow-hidden shadow-2xl">
                <div className="absolute left-1/2 -translate-x-1/2 -top-9/12 w-[580px] h-135.5 bg-[rgba(27,35,22,1)] rounded-full"></div>

                <div className="absolute top-1/2 left-0 px-14 mt-12">
                    <h1 className=" text-4xl font-light">{name}</h1>
                    <p className="mt-6 text-xl font-light tracking-wide ">{bio}</p>
                    <div className="mt-4 flex w-full justify-between">
                        <h2 className="text-4xl ">Rs. {price}/-</h2>
                        <div className="flex items-center justify-center w-12 h-12 border rounded-lg cursor-pointer"><IoBagHandleOutline size={24} /></div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PlantCard;