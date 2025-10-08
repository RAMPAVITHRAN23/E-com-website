import { Link } from 'react-router-dom'
import { HiOutlineUser, HiOutlineShoppingBag, HiOutlineShoppingCart } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import Searchbar from './Searchbar';
import Cartdrawer from '../Layout/Cartdrawer';
import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { IoMdClose } from 'react-icons/io'

const Navbar = () => {

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [navbarOpen, setNavbarOpen] = useState(false);

    const togglenavbarOpen = () => {
        setNavbarOpen(!navbarOpen);
    }

    const toggleCartdrawer = () => {
        // take current drawer state and flip it
        setDrawerOpen(!drawerOpen);
    };

    return (
        <>
            <nav className='container mx-auto flex items-center justify-between py-4 px-6'>
                {/* Left Logo Section */}
                <div>
                    <Link to="/" className='text-2xl font-bold text-gray-800'>
                        Rabbit
                    </Link>
                </div>
                {/* Center Navigation Links */}
                <div
                    className={`${navbarOpen ? 'flex' : 'hidden'
                        } flex-col absolute top-10 left-0 w-full bg-white p-4 space-y-4 
                        md:static md:flex md:flex-row md:space-x-6  md:space-y-0 
                        md:bg-transparent md:p-0 md:justify-center md:flex-grow `}
                >
                    {/* Close Button */}
                    <div className='flex  p-4 lg:hidden md:hidden justify-end'>
                        <button onClick={() => setNavbarOpen(false)}
                            className='focus:outline-none cursor-pointer'>
                            <IoMdClose className='h-6 w-6 text-gray-600 ' />
                        </button>
                    </div>
                        <p className='lg:hidden md:hidden text-gray-700 hover:text-black 
                        font-bold uppercase text-xl'>
                            MENU
                        </p>

                    {/* Navigation Links */}
                    <Link to="#"
                        onClick={togglenavbarOpen}
                        className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                        MEN
                    </Link>
                    <Link to="#"
                        onClick={togglenavbarOpen}
                        className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                        WOMEN
                    </Link>
                    <Link to="#"
                        onClick={togglenavbarOpen}
                        className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                        TOP WEAR
                    </Link>
                    <Link to="#"
                        onClick={togglenavbarOpen}
                        className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                        BOTTOM WEAR
                    </Link>
                </div>


                {/*Right Icons */}
                <div className='flex items-center space-x-4'>
                    <Link to="/profile" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                        <HiOutlineUser className='h-6 w-6 ' />
                    </Link>
                    {/* Cart Icon with Item Count */}
                    <button onClick={toggleCartdrawer} className='relative text-black '>
                        <HiOutlineShoppingBag className='h-6 w-6 text-gray-700 ' />
                        <span className='absolute bg-rabbit-red text-white rounded-full text-xs w-4 h-4
                        text-center font-semibold top-1'>
                            4
                        </span>
                    </button>
                    {/* Search Icon   */}
                    <div className='overflow-hidden '>
                        <Searchbar />
                    </div>


                    {/* Hamburger Menu for Mobile */}
                    <button onClick={togglenavbarOpen} className='md:hidden focus:outline-none'>
                        <HiBars3BottomRight className='h-6 w-6 text-gray-700 md:hidden' />
                    </button>
                </div>



            </nav>
            <Cartdrawer drawerOpen={drawerOpen} toggleDrawer={toggleCartdrawer} />
        </>
    )
}

export default Navbar