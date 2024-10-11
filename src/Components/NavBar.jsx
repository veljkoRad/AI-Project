import { useState } from 'react';
import { AppBar, Box, Toolbar, TextField, InputLabel, FilledInput, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {

  // Define the pages list
  const pages = ['Home', 'Blog', 'Webinars'];

  // Custom logo component
  const LogoIcon = () => (
    <Box component="img" src="/images/AI-Trader-Logo.png" alt="AI Trader Logo" sx={{ width: '140px' }} />
  );

  // Search Input component
  const SearchInput = () => (
    <TextField
      variant="outlined"
      color='secondary'
      size='small'
      placeholder="Search"
      focused
      hiddenLabel
      sx={{
        minWidth: '153px',
        maxWidth: '153px',
        marginLeft: '12px'
      }}
      slotProps={{
        htmlInput: {
          sx: {
            '&::placeholder': {
              color: 'secondary.main',
              fontSize: '13px',
              fontWeight: 500
            },
            height: '21px',
            padding: '5px 15px',
            fontSize: '13px'
          },
        },
      }}
    />
  )

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
        <List direction="row" spacing={2} sx={{ display: { xs: 'none', sm: 'flex' } }}>
          {pages.map(
            (page, index) => (
              <ListItem key={index} sx={{ cursor: 'pointer', padding: '0 12px' }} >
                {/* disableTypography- if I want to apply fontWeight here I must disable child element */}
                <ListItemText primary={page} sx={{ whiteSpace: 'nowrap', fontSize: '13px' }} disableTypography />
              </ListItem>
            )
          )}
          <SearchInput />
        </List>


        {/* Drawer for mobile */}
        <Drawer
          anchor="top"
          open={toggleMenu}
          onClose={toggleNavMenu}
          PaperProps={{
            sx: {
              backgroundColor: 'primary.main',
              display: 'flex', flexDirection: 'row-reverse', alignItems: 'flex-start'
            },
          }}>
          <IconButton onClick={toggleNavMenu} sx={{ padding: '1rem' }}>
            <CloseIcon color='secondary' fontSize='medium' />
          </IconButton>
          <List sx={{ marginLeft: 'auto' }}>
            {pages.map((page, index) =>
            (
              <ListItem key={index} onClick={toggleNavMenu} sx={{ cursor: 'pointer', padding: '8px 12px' }}>
                <ListItemText primary={page} disableTypography sx={{ fontSize: '13px' }} />
              </ListItem>)
            )
            }
            <SearchInput />
          </List>

        </Drawer>
      </Toolbar>
    </AppBar>
  )
};

export default Header;
