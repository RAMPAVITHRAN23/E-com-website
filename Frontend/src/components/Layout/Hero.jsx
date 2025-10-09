import heroImg from '../../assets/rabbit-hero.webp'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section className='relative '>
            <img src={heroImg} 
            alt="hero-Image"
            className='w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover '
            />
            <div className='absolute inset-0  bg-black/20  bg-opacity-50 flex items-center justify-center '>
                <div className='text-white p-6 text-center tracking-tighter'>
                    <h1 className='text-4xl md:text-9xl uppercase  font-bold mb-4'>
                        Vacation <br /> ready
                    </h1>
                    <p className='text-sm  md:text-lg py-3 tracking-tighter'>
                        Explore our vacation-ready outfits with fast world wide shipping
                    </p>
                    <Link to="" className="bg-white px-6 py-2 rounded text-lg font-semibold uppercase text-gray-950">
                    Shop now
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Hero;