import { useState } from 'react';
import { AppBar, Box, Toolbar, TextField, InputLabel, FilledInput, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import styled from '@emotion/styled';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {

  // Define the pages list
  const pages = ['Home', 'Blog', 'Webinars'];

  // Custom logo component
  // const LogoIcon=styled(Box)({
  //   width:'140px'
  // })

  const LogoIcon = styled((props) => (
    // This {...props} ,so that we can add other props as style,sx...
    <Box 
    component="img" 
    {...props} 
    src="/images/AI-Trader-Logo.png" 
    alt="AI Trader Logo" />
  ))({
    width: '140px',
  });


  const MyTextField=styled((props)=>(
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
          <LogoIcon  />
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
          <MyTextField />  
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
            <MyTextField />             
          </List>

        </Drawer>
      </Toolbar>
    </AppBar>
  )
};

export default Header;
