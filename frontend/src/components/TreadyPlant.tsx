import trendyPlant from '../assets/b48312dbddc890f7f35ef3964ae1e7900b89782c.png'
import deskPlant from '../assets/95e728282f4fb901ee2edc80783c2fbd7df490c2.png'
import Button from './ui/Button'
import Icon from './ui/Icon'
import SectionHeading from './ui/SectionHeading'
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
    <div className="flex-1 flex justify-center">
      <img
        src={image}
        alt={title}
        className="
          w-52
          sm:w-64
          md:w-72
          lg:w-96
          xl:w-[30rem]
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
    <div className="flex-1 flex flex-col justify-center text-center lg:text-left">
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
      text-white
        relative
        z-10
        rounded-3xl
        lg:rounded-[5rem]
        bg-white/10
        backdrop-blur-[12px]
        border
        border-white/10
        px-6
        py-8
        sm:px-8
        lg:px-14
        lg:py-10
        before:content-['']
        before:absolute
        before:inset-0
        before:rounded-3xl
        before:lg:rounded-[5rem]
        before:border
        before:border-white/20
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
    <div className='conainer mx-auto relative z-10 min-h-xl w-full  px-12 md:mt-24 pb-[4rem]'>
      <SectionHeading>Our Trendy plants</SectionHeading>

      <div className="mt-[14rem] md:mt-[10rem] flex flex-col gap-[8rem] md:px-[4rem]">
        {items.map((item, i) => (
          <TrendyCard key={i} {...item} />
        ))}
      </div>

    </div>
  )
}

export default TreadyPlant