import React from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import bannerData from "../../data/bannerData"


const AiNews = () => {
    return (
        <>
            <NavBar />
            <Banner data={bannerData.aiNews} />
            <div>This is AI News page</div>
            <Footer />
        </>
    )
}

export default AiNews