import { FaFacebookMessenger } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitterX } from 'react-icons/bs'
import { BiLogoGmail } from "react-icons/bi";
import { TbBrandMeta } from "react-icons/tb";
import { PiPhoneCall } from "react-icons/pi";

const Footer = () => {
    return <footer className="border-t py-12 px-4">
        <div className="container  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
            <div >
                <h3 className="text-lg mb-4 text-gray-800 font-semibold">
                    News Letter
                </h3>
                <p className="text-gray-500 mb-3">
                    Be the first to hear about new products , exclusive offers and more.
                </p>
                <p className="text-sm text-gray-600 my-4 font-medium">
                    Sign up and get 10% off on your first order.
                </p>
                <form className="flex">
                    <input type="email" placeholder="Enter your Email "
                        className="p-3  text-sm border-t border border-b border-gray-300 
                        :rounded-l-md
                    focus:outline-none focus-ring-2 focus:ring-gray-500 transition-all" required />
                    <button type="submit" className="bg-black text-white px-4 rounded-r-md text-sm
                    hover:bg-gray-800 transition-all cursor-pointer">
                        Subscribe
                    </button>
                </form>
            </div>
            {/* Link Sections */}
            <div >
                <h3 className="text-lg mb-4 text-gray-800 font-semibold">
                    Shop
                </h3>
                <ul className="flex flex-col space-y-3">
                    <li>
                        <a href="#" className="text-gray-500 hover:text-gray-800 text-sm">
                            Men' Top Wear
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-500 hover:text-gray-800 text-sm">
                            Women's Top Wear
                        </a>
                    </li>
                    <li >
                        <a href="#" className="text-gray-500 hover:text-gray-800 text-sm">
                            Men's Bottom Wear
                        </a>
                    </li>
                    <li >
                        <a href="#" className="text-gray-500 hover:text-gray-800 text-sm">
                            Women's Bottom Wear
                        </a>
                    </li>
                </ul>
            </div>

            {/* Support Links */}
            <div >
                <h3 className="text-lg mb-4 text-gray-800 font-semibold">
                    Support
                </h3>
                <ul className="flex flex-col space-y-3">
                    <li>
                        <a href="#" className="text-gray-500 hover:text-gray-800 text-sm">
                            Contact Us
                        </a>
                    </li>
                    <li className="mb-3">
                        <a href="#" className="text-gray-500 hover:text-gray-800 text-sm">
                            About Us
                        </a>
                    </li>
                    <li className="mb-3">
                        <a href="#" className="text-gray-500 hover:text-gray-800 text-sm">
                            FAQ's
                        </a>
                    </li>
                    <li className="mb-3">
                        <a href="#" className="text-gray-500 hover:text-gray-800 text-sm">
                            Features
                        </a>
                    </li>
                </ul>
            </div>

            {/*Follow us  */}
            <div>
                <h3 className="text-lg text-gray-800 mb-4 font-semibold">
                    Follow Us
                </h3>
                <div className="flex space-x-4 items-center mb-6 " >
                    <a href="">
                        <TbBrandMeta />
                    </a>
                    <a href="">
                        <FaFacebookMessenger />
                    </a>
                    <a href="">
                        <BsInstagram />
                    </a>
                    <a href="">
                        <BsTwitterX />
                    </a>
                    <a href="">
                        <BiLogoGmail />
                    </a>
                </div>
                <div>
                    <p className='mb-2 font-semibold text-gray-800 text-lg'>
                        Contact Us
                    </p>
                    <p className='text-gray-800 text-sm mb-2'>
                        <PiPhoneCall className='inline mr-2 h-5 w-5 '  />
                        +91 9876543210
                    </p>
                </div>
            </div>
            {/* Footer Bottom */}
            <div className='text-center col-span-1 sm:col-span-2 md:col-span-4 mt-8 text-gray-600'>
                {/* Horizontal Line */}
                <hr className='my-4 border-gray-300' />
                <p>
                    &copy; {new Date().getFullYear()} Rabbit. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
}

export default Footer