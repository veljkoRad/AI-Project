import React from "react"
import { LogoIcon } from "../styles/componentStyled"
import { FooterBackground } from "../styles/componentStyled"
import { Box, Container, Typography } from "@mui/material"

const Footer = () => {

    return (
        <FooterBackground
            // @ts-ignore  
            component="footer"
        >
            <Container
                maxWidth="md"
                sx={{ padding: '34px 0 !important', }}
            >
                <LogoIcon
                    component="img"
                    src="/images/AI-Trader-Logo.png"
                    alt="AI Trader Logo"
                />
                <Box component="hr" />
                <Typography
                    variant="subtitle2"
                    textAlign="right"
                >
                    © Copyright 2024. All Rights Reserved.
                </Typography>
            </Container>
        </FooterBackground>
    )
}

export default Footer