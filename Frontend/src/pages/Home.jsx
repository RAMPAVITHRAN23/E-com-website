import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import Footer from '../components/Common/Footer'
import NewArrivals from '../components/Products/NewArrivals'
import Productdetails from '../components/Products/Productdetails'

const Home = () => {
    return (
        <div>
            <Hero/>
            <GenderCollectionSection/>
            <NewArrivals/>

            {/*Best Seller */}
            <h2 className='text-3xl text-center font-bold mb-4'>
                Best Seller 
            </h2>
            <Productdetails/>
            
        </div>
    )
}

export default Home