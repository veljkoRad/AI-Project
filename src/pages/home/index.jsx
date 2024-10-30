import React from "react"
import NavBar from "../../Components/NavBar"
import Banner from "../../Components/Banner"
import BannerHome from "./BannerHome"
import WebinarsPost from "./WebinarsPost"
import TradingNews from "./TradingNews"
import Fortrade from "./Fortrade"
import Footer from "../../Components/Footer"
// Styles
import { NewsSection } from "../../styles/homePageStyled"
import AiNews from "./AiNews"


const Home = () => {
    return (
        <>
            <NavBar />
            <Banner >
                <BannerHome />
            </Banner>
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