import React from 'react'
import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories'
import BestSelller from '../components/BestSelller'
import BottomBanner from '../components/BottomBanner'

const Home = () => {
    return (
        <div>
            <MainBanner />
            <Categories />
            <BestSelller />
            <BottomBanner />
        </div>
    )
}

export default Home