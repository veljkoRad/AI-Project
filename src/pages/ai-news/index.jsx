import React from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import bannerData from "../../data/bannerData"
import Blogs from './Blogs'


const AiNews = () => {
    return (
        <>
            <NavBar />
            <Banner data={bannerData.aiNews} />
            <Blogs />
            <Footer />
        </>
    )
}

export default AiNews