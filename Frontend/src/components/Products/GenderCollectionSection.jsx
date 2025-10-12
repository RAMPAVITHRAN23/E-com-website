import { Link } from 'react-router-dom'
import maleImg from '../../assets/mens-collection.webp'
import femaleImg from '../../assets/womens-collection.webp'


const GenderCollectionSection = () => {
    return (
        <section className='py-16 px-4 lg:px-0'>
            <div className='container mx-auto flex flex-col md:flex-row gap-8 '>
                {/* Womens section  */}
                <div className='relative  flex-1'>
                    <img src={femaleImg}
                        alt=""
                        className='w-full h-[700px] object-cover' ></img>
                    <div className='absolute bottom-8 left-8 bg-white/90 p-4'>
                        <h2 className='text-3xl font-bold text-gray-900 mb-3'>
                        Women's Collection
                        </h2>
                        <Link 
                        to="/collections/all?gender=women"
                        className='text-gray-900 underline underline-offset-2'>
                            Shop Now
                        </Link>
                    </div>
                </div>
                
                {/* Mens section  */}
                <div className='relative  flex-1 '>
                    <img src={maleImg}
                        alt=""
                        className='w-full h-[700px] object-cover ' ></img>
                    <div className='absolute bottom-8 left-8 bg-white/90 p-4'>
                        <h2 className='text-3xl font-bold text-gray-900 mb-3'>
                            Men's Collection
                        </h2>
                        <Link 
                        to="/collections/all?gender=men"
                        className='text-gray-900 underline underline-offset-2'>
                            Shop Now
                        </Link>
                    </div>
                </div>
                



            </div>

        </section>
    )
}

export default GenderCollectionSection