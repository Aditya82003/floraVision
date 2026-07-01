import CustomerCard from '../components/CustomerCard'
import avatarShelly from '../assets/a5003c9c04bdc265d997eb88ecb49b2ed88c8428.png'
import avatarLula from '../assets/8af347a65acb49fcb29cfac2ba705f2b27151f3f.jpg'
import avatarCarol from '../assets/04f4a376d1869488dd43f1a5e57a36f5cdf73be4.png'

type Review = {
    name: string
    avatar: string
    rating: number
    quote: string
}

const reviews: Review[] = [
    {
        name: 'Shelly Russel',
        avatar: avatarShelly,
        rating: 4.5,
        quote:
            'Just got my hands on some absolutely awesome plants, and I couldn’t be happier!',
    },
    {
        name: 'Lula Rolfson',
        avatar: avatarLula,
        rating: 4.5,
        quote:
            'Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.',
    },
    {
        name: 'Carol Huels',
        avatar: avatarCarol,
        rating: 4.5,
        quote:
            "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
    },
]

const CustomerReview = () => {
    return (
        <div className='w-full text-white mt-[8rem]'>
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
                    Customer Review
                </h1>
            </div>
            <div className='flex justify-center'>
                <div className='flex  flex-wrap flex-col lg: md:flex-row gap-6 items-center justify-center mt-14 md:mt-[8rem]'>
                    {reviews.map((review) => (
                        <CustomerCard
                            key={review.name}
                            name={review.name}
                            avatar={review.avatar}
                            rating={review.rating}
                            quote={review.quote}
                        />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default CustomerReview