import PlantCard from "../components/PlantCard"
import { topSellingPlants } from "../data/plants"


const TopSelling = () => {
    return (
        <section className="wrap my-[5rem] ">
            <div className='w-full flex justify-center text-white'>
                <h1
                    className="relative inline-block text-3xl md:text-6xl font-semibold font-['Inter']
                before:content-['']
                before:absolute
                before:-bottom-3
                    before:-left-3
                    before:w-10
                    md:before:w-16
                    before:h-10
                    md:before:h-16
                    before:border-b-5
                    before:border-l-5
                    before:rounded-bl-3xl
                    before:border-lime-200

                    after:content-['']
                    after:absolute
                    after:-right-3
                    after:-top-1
                    after:w-10
                    md:after:w-16
                    after:h-10
                    md:after:h-16
                    after:border-t-4
                    after:border-r-5
                    after:rounded-tr-3xl
                  after:border-lime-200"
                >
                    Our Top selling plants
                </h1>
            </div>

            <div className="mt-[8rem] w-full flex flex-col justify-center  lg:flex-row lg:flex-wrap gap-18 md:gap-4">
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