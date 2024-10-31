import React from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import bannerData from "../../data/bannerData"
const Trading = () => {
    return (
        <>
            <NavBar />
            <Banner data={bannerData.trading} />
            <div>This is Trading page</div>
            <Footer />
        </>
    )
}

export default Trading