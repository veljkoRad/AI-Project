import React from "react"
import { NewsSection } from "../../styles/HomePageStyled"
import NavBar from "../../Components/NavBar"
import Banner from "../../Components/Banner"
import BannerHome from "./BannerHome"
import AiNews from "./AiNews"
import TradingNews from "./TradingNews"
import WebinarsPost from "./WebinarsPost"
import Footer from "../../Components/Footer"


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
            <TradingNews />
            <Footer />
        </>
    )
}

export default Home
