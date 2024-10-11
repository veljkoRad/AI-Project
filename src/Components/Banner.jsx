import { Box } from "@mui/material"



const Banner = ({ children }) => {



    // Banner Background Component
    const BannerBG = ({ children }) => (
        //I must add children as prop because if i just define this component as self closing it wil not load anything inside of it
        <Box component="main"
            sx={{
                backgroundImage: "url('/images/arms-background.png')",
                backgroundSize: 'cover',
                minHeight: '407px',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                padding: '1rem'
            }} >
            {children}
        </Box>
    )

    //Banner Container Component
    const BannerContainer = ({ children }) => (
        <Box component='div'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                maxWidth: '734px'
            }}>
            {children}
        </Box >
    )


    return (
        <BannerBG>
            <BannerContainer>
                {children}
            </BannerContainer>
        </BannerBG>
    )
}

export default Banner