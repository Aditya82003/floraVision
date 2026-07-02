type PlantCardProps = {
    name: string;
    bio: string;
    price: number;
    image: string;
};
import { IoBagHandleOutline } from "react-icons/io5";
import Button from "./ui/Button";
import Icon from "./ui/Icon";

const PlantCard = ({ name, bio, price, image }: PlantCardProps) => {
    return (
        <div className="relative w-[350px] h-[480px] rounded-[5rem] bg-[rgb(38,46,34)] drop-shadow-2xl text-white">
            <img src={image} className="block absolute z-20 top-0 left-1/2 -translate-x-1/2 -translate-y-2/6 h-[20rem]" />
            <div className="relative w-full h-full rounded-[5rem]  p-2 border-t-0 border border-white/10 overflow-hidden">
                <div className="absolute w-[22rem] h-[16rem] -top-[15rem] left-1/2 -translate-x-1/2 z-10 rounded-full bg-[rgba(27,35,22,1)] border  border-white/10"></div>
                <div className="absolute top-1/2 w-ful h-1/2 px-6 ">
                    <h1 className=" text-4xl font-light">{name}</h1>
                    <p className="mt-2 text-lg font-light tracking-wide min-h-[6rem]">{bio}</p>
                    <div className="mt-2 flex w-full justify-between">
                        <h2 className="text-2xl ">Rs. {price}/-</h2>
                        <Button variant="icon" className="h-12 w-12 text-light ">
                            <Icon name="bag" size="2rem" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlantCard;