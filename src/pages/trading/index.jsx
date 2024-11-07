import React from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import BlogsAll from '../../components/BlogsAll'
import bannerData from "../../data/bannerData"
import tradingNewsData from "../../data/tradingNewsData"
const Trading = () => {
    return (
        <>
            <NavBar />
            <Banner data={bannerData.trading} />
            <BlogsAll data={tradingNewsData} newsType='trading-news' />
            <Footer />
        </>
    )
}

export default Trading