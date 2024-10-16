
import React from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

// THis file is for styling components that are using in multiple other components
export const LogoIcon = styled((props) => (
    // This {...props} ,so that we can add other props as style,sx...
    <Box
        component="img"
        {...props}
        src="/images/AI-Trader-Logo.png"
        alt="AI Trader Logo" />
))({
    width: '140px',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
        transform: 'scale(1.03)',
    },
});