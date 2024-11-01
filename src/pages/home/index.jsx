import React from "react"
import NavBar from "../../Components/NavBar"
import Banner from "../../Components/Banner"
import WebinarsPost from "./WebinarsPost"
import TradingNews from "./TradingNews"
import Fortrade from "./Fortrade"
import Footer from "../../Components/Footer"
// Styles
import { NewsSection } from "../../styles/homeStyled"
import AiNews from "./AiNews"
import bannerData from "../../data/bannerData"


const Home = () => {

    return (
        <>
            <NavBar />
            <Banner data={bannerData.home} />
            <NewsSection as="section" >
                <AiNews />
                <WebinarsPost />
            </NewsSection>
            <Fortrade />
            <TradingNews />
            <Footer />
        </>
    )
}

export default Home