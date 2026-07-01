import HeroBanner from "../components/HeroBanner";
import TreadyPlant from "../components/TreadyPlant";
import TopSelling from "./TopSelling";
import CustomerReview from "./CustomerReview";
import O2 from "./O2";
import heroBg from "../assets/fa0765984e44f85e1a04562f820f1492949a1257.jpg";

const MainSection = () => {
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="container mx-auto px-4">
          <HeroBanner />
          <TreadyPlant />
        </div>
      </div>

      <TopSelling />
      <CustomerReview />
      <O2 />
    </>
  );
};

export default MainSection;