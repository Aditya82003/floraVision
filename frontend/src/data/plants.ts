import aglaonema from '../assets/c8eb5b1abede1308e0eaf899d1f7faae62a0c2f6.png'
import plantainLilies from '../assets/b48312dbddc890f7f35ef3964ae1e7900b89782c.png'
import cactus from '../assets/6d90916507b2b3030961c99c6af0ebac97b86c78.png'
import swissCheese from '../assets/5196aba58f7006d90ec0712ac1d01688cde1a537.png'
import sansevieria from '../assets/eb0351a5771ed55c7f3454bcce697dfe63237769.png'
import agave from '../assets/444fba49a2674d2262c5455bcc501cb91b314490.png'

export type Plant = {
  id: string
  name: string
  description: string
  price: number
  image: string
}

export const topSellingPlants: Plant[] = [
  {
    id: 'aglaonema',
    name: 'Aglaonema plant',
    description:
      'The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care',
    price: 300,
    image: aglaonema,
  },
  {
    id: 'plantain-lilies',
    name: 'Plantain Lilies',
    description:
      'Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,',
    price: 380,
    image: plantainLilies,
  },
  {
    id: 'cactus',
    name: 'Cactus',
    description: 'It is known for their ability to thrive in arid environments',
    price: 259,
    image: cactus,
  },
  {
    id: 'swiss-cheese',
    name: 'Swiss cheese Plant',
    description:
      'It is a popular tropical houseplant known for its distinctive, perforated leaves',
    price: 400,
    image: swissCheese,
  },
  {
    id: 'sansevieria',
    name: 'Sansevieria plant',
    description:
      'It is a popular indoor plant admired for its striking appearance and low-maintenance nature.',
    price: 450,
    image: sansevieria,
  },
  {
    id: 'agave',
    name: 'Agave plant',
    description:
      'The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.',
    price: 359,
    image: agave,
  },
]
