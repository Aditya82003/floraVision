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

function TrendyCard({
  image,
  title,
  description,
  price,
  imageSide,
}: TrendyItem) {
  const Image = (
    <div className="flex justify-center">
      <img
        src={image}
        alt={title}
        className="
          w-52
          sm:w-64
          md:w-72
          lg:w-80
          xl:w-[26rem]
          object-contain
          drop-shadow-2xl
          -mt-20
          md:-mt-28
          lg:-mt-36
        "
      />
    </div>
  );

  const Content = (
    <div className="flex flex-col justify-center text-center lg:text-left">
      <h3 className="text-2xl md:text-3xl font-semibold">
        {title}
      </h3>

      <p className="mt-5 text-sm md:text-base text-white/80 leading-7 max-w-xl mx-auto lg:mx-0">
        {description}
      </p>

      <p className="mt-6 text-2xl md:text-3xl font-semibold">
        {price}
      </p>

      <div className="mt-7 flex justify-center lg:justify-start gap-4">
        <Button className="h-12 w-32 text-lg">
          Explore
        </Button>

        <Button variant="icon" className="h-12 w-12">
          <Icon name="bag" size="1.1em" />
        </Button>
      </div>
    </div>
  );

  return (
    <div
      className="
        rounded-3xl
        lg:rounded-[5rem]
        bg-white/10
        backdrop-blur-xl
        border
        border-white/10
        px-6
        py-8
        sm:px-8
        lg:px-14
        lg:py-10
      "
    >
      <div
        className={`
          flex flex-col lg:flex-row items-center gap-8 lg:gap-16
          ${imageSide === "right" ? "lg:flex-row-reverse" : ""}
        `}
      >
        {Image}
        {Content}
      </div>
    </div>
  );
}

const TreadyPlant = () => {
    return (
        <div className='conainer mx-auto relative z-10 min-h-xl w-full  text-white px-12 md:mt-24 pb-[4rem]'>
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