import React from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import bannerData from "../../data/bannerData"

const Webinars = () => {
    return (
        <>
            <NavBar />
            <Banner data={bannerData.webinars} />
            <div>This is Webinars page</div>
            <Footer />
        </>
    )
}

export default Webinars