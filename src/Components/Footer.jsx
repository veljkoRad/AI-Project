import React from "react"
import { LogoIcon } from "../styles/PageStyled"
import { Box, Container, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"
import { BorderBottom } from "@mui/icons-material"

const Footer = () => {

    const FooterBackground = styled(Box)(({ theme }) => ({
        padding: '34px 0',
        backgroundColor: theme.palette.primary.main,
        backgroundImage: "url('images/footerBG.png')",
        backgroundSize: '694px 150px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right -10px'
    }))

    return (
        <FooterBackground // @ts-ignore  
            component="footer">
            <Container maxWidth="md" >
                <LogoIcon />
                <Box component="hr" />
                <Typography variant="subtitle2" textAlign="right" >
                    © Copyright 2024. All Rights Reserved.
                </Typography>
            </Container>
        </FooterBackground>

    )
}

export default Footer