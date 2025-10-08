import Topbar from '../Layout/Topbar'
import Navbar from './Navbar'

const Header = () => {
    return (
        <header className='w-full border-b border-gray-200 bg-white'>
            {/* Top bar*/}
            <Topbar/>
            {/* Nav BAr*/}
            <Navbar/>
            {/* CArt Drawer*/}
        </header>
    )
}

export default Header