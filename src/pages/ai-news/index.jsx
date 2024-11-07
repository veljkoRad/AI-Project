import React from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import bannerData from "../../data/bannerData"
import Blogs from '../../components/Blogs'
import aiData from '../../data/aiData'


const AiNews = () => {
    return (
        <>
            <NavBar />
            <Banner data={bannerData.aiNews} />
            <Blogs data={aiData} newsType='ai-news' />
            <Footer />
        </>
    )
}

export default AiNews