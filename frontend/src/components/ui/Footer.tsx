import footerImg from '../../assets/5e88b52117aa40baa6a96e43b5c4e57858edaa47.png'
const Footer = () => {
  return (
    <footer className="container mx-auto flex gap-4 h-[18rem] text-white">
        <div>
            <div className='flex gap-4 items-center'>
                <img src={footerImg} className='w-12 h-12 object-contain'/>
                <h1>Flora Vision</h1>
            </div>
        </div>
        <div>

        </div>

    </footer>
  )
}

export default Footer