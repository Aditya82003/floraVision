import PlantCard from "../components/PlantCard"
import SectionHeading from "../components/ui/SectionHeading"
import { topSellingPlants } from "../data/plants"


const TopSelling = () => {
    return (
        <section className="container mx-auto wrap my-[5rem] ">
            <SectionHeading>Ours Selling Plants</SectionHeading>

            <div className="mt-[8rem] w-full flex flex-col justify-center  lg:flex-row lg:flex-wrap gap-28 md:gap-4">
                {topSellingPlants.map((plant) => (
                    <div key={plant.name} className="flex items-center justify-center md:p-8">
                        <PlantCard
                            name={plant.name}
                            bio={plant.description}
                            price={plant.price}
                            image={plant.image}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TopSelling