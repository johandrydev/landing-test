import { Box, Button, Container, Drawer, IconButton, Link, Menu, MenuItem, Typography } from '@mui/material';
import logo from '../assets/img/logo.svg';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import LoginForm from './LoginForm';
import { useUserContext } from '../context/userContext';
import { userLogout } from '../context/actions/userActions';
import { logout } from '../firebase/client';

const Navbar = () => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up('md'));

  const { userState, userDispatch } = useUserContext();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const open = Boolean(anchorEl);

  const toggleDrawer = () => setOpenDrawer((prev) => !prev);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(anchorEl ? null : event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  const handleLogOut = () => {
    logout();
    userDispatch(userLogout());
  };

  return (
    <nav className="navbar">
      <Container sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
      }} >
        <img src={logo} alt="logo" />
        {
          md ? (
            <Box sx={{
              display: 'flex'
            }}
            >
              <Link underline="none" className="nav-btn" href='#'>
                <Typography className="text-white">INICIO</Typography>
              </Link>
              <Link underline="none" className="nav-btn" href='#benefits-section'>
                <Typography className="text-white">BENEFICIOS</Typography>
              </Link>
              <Link underline="none" className="nav-btn" onClick={
                userState?.isAutenticated ?
                  handleLogOut :
                  toggleDrawer
              }><Typography className="text-white">{
                userState?.isAutenticated ? 'LOGOUT' : 'LOGIN'
              }</Typography></Link>
            </Box>
          ) : (
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2, color: 'white' }}
              onClick={handleClick}
            >
              <MenuIcon />
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem>
                  <Link underline="none" href='#'>
                    <Typography className="text-dark">INICIO</Typography>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link underline="none" href='#benefits-section'>
                    <Typography className="text-dark">BENEFICIOS</Typography>
                  </Link>
                </MenuItem>
                <MenuItem className='coursor-pointer'>
                  <Link underline="none" onClick={
                    userState?.isAutenticated ?
                      handleLogOut :
                      toggleDrawer
                  }><Typography className="text-dark">{
                    userState?.isAutenticated ? 'LOGOUT' : 'LOGIN'
                  }</Typography></Link>
                </MenuItem>
              </Menu>
            </IconButton>
          )
        }
        <Drawer
          anchor='right'
          open={openDrawer}
          onClose={() => toggleDrawer()}
        >
          <LoginForm />
        </Drawer>
      </Container>
    </nav >
  );
};

export default Navbar;
