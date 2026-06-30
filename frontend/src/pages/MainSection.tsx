import HeroBanner from "../components/HeroBanner"
import heroBg from '../assets/fa0765984e44f85e1a04562f820f1492949a1257.jpg'
import TreadyPlant from "../components/TreadyPlant"
import TopSelling from "./TopSelling"
import CustomerReview from "./CustomerReview"
import O2 from "./O2"


const MainSection = () => {
  return (
    <div className="container mx-auto">
      <div className="relative h-[2500px] ">
        <img
          src={heroBg}
          alt="Plant"
          className="absolute  w-auto mx-auto z-10"
        />
        <HeroBanner />
        <TreadyPlant />
      </div>
      <TopSelling/>
      <CustomerReview/>
      <O2/>
      

    </div>
  )
}

export default MainSection