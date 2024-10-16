import React from 'react';
import { useState } from 'react';
import { AppBar, Box, Toolbar, TextField, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { LogoIcon } from "../styles/PageStyled"
import { styled } from "@mui/material/styles"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {

  // Define the pages list
  const pages = ['Home', 'Blog', 'Webinars'];

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

  const MyListItemText = styled((props) => (
    <ListItemText
      disableTypography
      {...props}
      size='small'
      placeholder="Search"
    />
  ))({ whiteSpace: 'nowrap', fontSize: '13px' })

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

        <List component="nav" sx={{ display: { xs: 'none', sm: 'flex' } }}>
          {pages.map(
            (page, index) => (
              <NavBarListItem key={index} >
                {/* disableTypography- if I want to apply fontWeight here I must disable child element */}
                <MyListItemText primary={page} />
              </NavBarListItem>
            )
          )}
          <NavTextField />

        </List>

        {/* Drawer for mobile */}
        <Drawer anchor="top" open={toggleMenu} onClose={toggleNavMenu} >
          <IconButton onClick={toggleNavMenu} sx={{ padding: 4 }}>
            <CloseIcon color='secondary' fontSize='medium' />
          </IconButton>
          <List component="nav" sx={{ marginLeft: 'auto' }}>
            {pages.map((page, index) =>
            (
              <NavBarListItem key={index} onClick={toggleNavMenu} >
                <MyListItemText primary={page} />
              </NavBarListItem>
            ))}
            <NavTextField />
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  )
};

export default Header;
