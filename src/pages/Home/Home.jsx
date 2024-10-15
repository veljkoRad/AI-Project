import React from "react"
import NavBar from "../../Components/NavBar"
import Banner from "../../Components/Banner"
import BannerHome from "./BannerHome"
import AiNews from "./AiNews"
import WebinarsPost from "./WebinarsPost"
import { NewsSection } from "../../styles/HomePageStyled"


const Home = () => {
    return (
        <>
            <NavBar />
            <Banner >
                <BannerHome />
            </Banner>
            <NewsSection >
                <AiNews />
                <WebinarsPost />
            </NewsSection>
        </>
    )
}

export default Home
