import React from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import Blogs from '../../components/Blogs'
import bannerData from "../../data/bannerData"
import tradingData from "../../data/tradingData"
const Trading = () => {
    return (
        <>
            <NavBar />
            <Banner data={bannerData.trading} />
            <Blogs data={tradingData} newsType='trading-news' />
            <Footer />
        </>
    )
}

export default Trading