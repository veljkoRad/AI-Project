import React from "react"
import NavBar from "../../Components/NavBar"
import Banner from "../../Components/Banner"
import TradingNews from "./TradingNews"
import NextWebinar from "./NextWebinar"
import Footer from "../../Components/Footer"
// Styles
import AiNews from "./AiNews"
import bannerData from "../../data/bannerData"



const Home = () => {

    return (
        <>
            <NavBar />
            <Banner data={bannerData.home} />
            <AiNews />
            <NextWebinar />
            <TradingNews />
            <Footer />
        </>
    )
}

export default Home