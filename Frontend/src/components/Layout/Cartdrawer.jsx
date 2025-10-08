
import { IoMdClose } from 'react-icons/io'
import Cartcontent from '../Cart/Cartcontent';


const Cartdrawer = ({ drawerOpen, toggleDrawer }) => {


    return (
        <div className={`fixed top-0 right-0 w-3/4  sm:w-1/2 md:w-1/4 h-full bg-white shadow-lg transform
                        transition-transform duration-300 ease-in-out z-50 rounded-l-lg 
                        ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}>
            {/* Close Button */}
            <div className='flex justify-end p-4'>
                <button onClick={toggleDrawer} className='focus:outline-none cursor-pointer'>
                    <IoMdClose className='h-6 w-6 text-gray-600' />
                </button>
            </div>
            {/* Cart Items */}
            <div className='flex-grow p-4 overflow-y-auto'>
                <h1 className='text-xl font-semibold mb-4'>
                    Cart Items
                </h1>
            </div>
            {/* Cart items */}
            <div>
                <Cartcontent/>
            </div>

            {/* Checkout Button */}
            <div className='p-4 bg-white sticky bottom-0'>
                <button className='w-full bg-black rounded-full font-semibold text-white
                hover:bg-gray-800 transition cursor-pointer py-3 mb-2'>
                    Checkout
                </button>
                <p className='text-center text-sm tracking-tighter mt-2 text-gray-500'>
                    Shipping, taxes and discount codes calculated at checkout.
                </p>
            </div>


        </div>
    )
}

export default Cartdrawer