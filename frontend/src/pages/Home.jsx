import React from 'react'
import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories'
import BestSelller from '../components/BestSelller'

const Home = () => {
    return (
        <div>
            <MainBanner />
            <Categories />
            <BestSelller />
        </div>
    )
}

export default Home