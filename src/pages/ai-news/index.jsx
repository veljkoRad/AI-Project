import React from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import bannerData from "../../data/bannerData"
import BlogsAll from '../../components/BlogsAll'
import AiNewsData from '../../data/aiNewsData'


const AiNews = () => {
    return (
        <>
            <NavBar />
            <Banner data={bannerData.aiNews} />
            <BlogsAll data={AiNewsData} newsType='ai-news' />
            <Footer />
        </>
    )
}

export default AiNews