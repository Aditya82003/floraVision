import HeroBanner from "../components/heroBanner"
import heroBg from '../assets/fa0765984e44f85e1a04562f820f1492949a1257.jpg'
import TreadyPlant from "../components/TreadyPlant"


const MainSection = () => {
  return (
    <div className="container mx-auto">
      <div className="relative">
        <img
          src={heroBg}
          alt="Plant"
          className="absolute  w-auto mx-auto z-10"
        />
        <HeroBanner />
        <TreadyPlant />
      </div>

    </div>
  )
}

export default MainSection