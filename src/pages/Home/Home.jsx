import NavBar from "../../Components/NavBar"
import Banner from "../../Components/Banner"
import BannerHome from "./BannerHome"
import AiNews from "./AiNews"


const Home = () => {
    return (
        <>
            <NavBar />
            <Banner >
                <BannerHome />
            </Banner>
            <AiNews />
        </>
    )
}

export default Home
