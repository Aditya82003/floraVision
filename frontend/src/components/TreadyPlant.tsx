import trendyPlant from '../assets/b48312dbddc890f7f35ef3964ae1e7900b89782c.png'
import deskPlant from '../assets/95e728282f4fb901ee2edc80783c2fbd7df490c2.png'
import Button from './ui/Button'
import Icon from './ui/Icon'
type TrendyItem = {
    image: string
    title: string
    description: string
    price: string
    imageSide: 'left' | 'right'
}

const items: TrendyItem[] = [
    {
        image: trendyPlant,
        title: 'For Your Desks Decorations',
        description:
            'I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!',
        price: 'Rs. 599/-',
        imageSide: 'left',
    },
    {
        image: deskPlant,
        title: 'For Your Desks Decorations',
        description:
            'The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming',
        price: 'Rs. 399/-',
        imageSide: 'right',
    },
]

function TrendyCard({ image, title, description, price, imageSide }: TrendyItem) {
    const media = (
        <div className="hidden md:flex shrink-0 items-center justify-center max-md:order-first">
            <img
                src={image}
                alt=""
                className="absolute -top-1/2 w-[38rem] max-w-full drop-shadow-2xl max-md:w-[22rem]"
            />
        </div>
    )

    const body = (
        <div className="flex flex-col justify-center max-md:items-center max-md:text-center">
            <h3 className=" font-semibold tracking-wide text-xl md:text-3xl">{title}</h3>
            <p className="mt-5 max-w-[35 rem] text-sm font-light text-white">
                {description}
            </p>
            <p className="mt-6 text-3xl font-semibold">{price}</p>
            <div className="mt-7 flex items-center gap-5">
                <Button className='w-28 h-12 text-lg px-2 py-2'>Explore</Button>
                <Button variant="icon" aria-label="Add to cart" className='w-12 h-12'>
                    <Icon name="bag" size="1.1em" />
                </Button>
            </div>
        </div>
    )

    return (
        <div className="relative bg-white/10 backdrop-blur-lg h-[400px] grid grid-cols-2 items-center gap-14 rounded-[8rem] px-20 py-8 max-md:grid-cols-1 max-md:gap-6 max-md:rounded-4xl max-md:py-8">
            {imageSide === 'left' ? (
                <>
                    {media}
                    {body}
                </>
            ) : (
                <>
                    {body}
                    {media}
                </>
            )}
        </div>
    )
}

const TreadyPlant = () => {
    return (
        <div className='relative z-10 min-h-xl w-full  text-white px-12 md:mt-24'>
            <div className='w-full flex justify-center'>
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
                    Our Trendy plants
                </h1>
            </div>

            <div className="mt-[14rem] md:mt-[10rem] flex flex-col gap-[8rem]">
                {items.map((item, i) => (
                    <TrendyCard key={i} {...item} />
                ))}
            </div>

        </div>
    )
}

export default TreadyPlant