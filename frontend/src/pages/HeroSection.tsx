import heroBg from '../assets/fa0765984e44f85e1a04562f820f1492949a1257.jpg'
const HeroSection = () => {
  return (
    <section className="container mx-auto relative min-h-screen">
      <img
        src={heroBg}
        alt="Plant"
        className="absolute inset-0 w-auto mx-auto"
      />

    </section>
  )
}

export default HeroSection