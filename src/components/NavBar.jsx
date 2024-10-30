import React from 'react';
import { useState } from 'react';
import { AppBar, Box, Toolbar, TextField, IconButton, Drawer, List, ListItem, ListItemText, colors } from '@mui/material';
import { LogoIcon } from "../styles/pageStyled"
import { styled } from "@mui/material/styles"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
    const router = useRouter();

    // Page Routes data
    const pages = [{ name: 'Home', href: '/' }, { name: 'AI News', href: '/ai-news' }, { name: 'Trading', href: '/' }, { name: 'Webinars', href: '/' }];

    // Search Field Component
    const NavTextField = styled((props) => (
        <TextField
            variant="outlined"
            color='secondary'
            {...props}
            size='small'
            placeholder="Search"
            focused
            hiddenLabel
        />
    ))({})
    // Menu Item Component
    const NavBarListItem = styled(ListItem)(({ theme }) => ({
        cursor: 'pointer',
        padding: `0 ${theme.spacing(3)}`,
        [theme.breakpoints.down('md')]: {
            padding: `${theme.spacing(2)} ${theme.spacing(3)}`
        },
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
            transform: 'scale(1.1)',
        },
    }))

    // Toggle state for mobile menu (Drawer)
    const [toggleMenu, setToggleMenu] = useState(false);
    const toggleNavMenu = () => {
        setToggleMenu(!toggleMenu);  // Toggling the menu state
    };


    return (
        <AppBar color='primary' position='sticky' >
            <Toolbar >

                {/* Logo with link to home */}
                <IconButton href='http://localhost:3000/'  >
                    <LogoIcon />
                </IconButton>

                {/* Menu button for mobile view */}
                <IconButton onClick={toggleNavMenu} sx={{ display: { sm: 'none' } }}>
                    <MenuIcon color='secondary' fontSize='medium' />
                </IconButton>

                {/* Navigation  for desktop  */}

                <List component="nav" sx={{ display: { xs: 'none', sm: 'flex', alignItems: 'center' } }}>
                    {pages.map(
                        (page, index) => (
                            <Link key={index} href={page.href} className={router.pathname === page.href ? 'menuActive' : 'menuDefault'}>
                                <NavBarListItem  >
                                    {/* disableTypography- if I want to apply fontWeight here I must disable child element */}
                                    <ListItemText primary={page.name} disableTypography size='small' placeholder="Search" sx={{ fontSize: '13px' }} />
                                </NavBarListItem>
                            </Link>
                        )
                    )}
                    <NavTextField />

                </List>

                {/* Drawer for mobile */}
                <Drawer anchor="top" open={toggleMenu} onClose={toggleNavMenu} >
                    <IconButton onClick={toggleNavMenu} sx={{ padding: 4 }}>
                        <CloseIcon color='secondary' fontSize='medium' />
                    </IconButton>
                    <List component="nav" sx={{ marginLeft: 'auto', paddingBottom: '16px' }}>
                        {pages.map((page, index) =>
                        (
                            <Link key={index} href={page.href} className={router.pathname === page.href ? 'menuActive' : 'menuDefault'}>
                                <NavBarListItem onClick={toggleNavMenu} >
                                    <ListItemText primary={page.name} disableTypography size='small' placeholder="Search" sx={{ fontSize: '13px' }} />
                                </NavBarListItem>
                            </Link>
                        ))}
                        <NavTextField />
                    </List>
                </Drawer>
            </Toolbar>
        </AppBar>
    )
};

export default Header;