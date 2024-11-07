import React from "react"
import NavBar from "../../Components/NavBar"
import Banner from "../../Components/Banner"
import LatestTrading from "./LatestTrading"
import NextWebinar from "./NextWebinar"
import Footer from "../../Components/Footer"
// Styles
import LatestAi from "./LatestAi"
import bannerData from "../../data/bannerData"



const Home = () => {

    return (
        <>
            <NavBar />
            <Banner data={bannerData.home} />
            <LatestAi />
            <NextWebinar />
            <LatestTrading />
            <Footer />
        </>
    )
}

export default Home