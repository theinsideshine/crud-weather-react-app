import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../../images/firma_mb.png';
import { useDispatch, useSelector } from 'react-redux';
import { Link} from 'react-router-dom';

import { logout } from '../../action/auth';





const ResponsiveAppBar = () => {
  
  const { name } = useSelector( state => state.auth);
  const dispatch = useDispatch ();

  const btnLogout = (e) => {
  
   
  
    e.preventDefault();
    console.log('logout');
    localStorage.clear(); 
    dispatch ( logout() );
  
  }

  

  


  return (
    <AppBar position="fixed" style={{ background: '#FFFFFF'}} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
       
        <Box
            component="img"
            sx={{
            height: 50,
            }}
            alt="Your logo."
            src={Logo}
             />           
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
              <Button
              style={{color:"#000000"}}                
               
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to="/">
                CLIMA
                </Link>
                
              </Button>    

              
            
              <Button
              style={{color:"#000000"}}                
                
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to="/crud">
                USUARIOS
                </Link>
                
              </Button>  
           
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ m: 2 ,flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            style={{color:"#000000"}}
            align="right"
          >
            {name}
          </Typography>

          <Button color="inherit"
           style={{color:"#000000"}}
           onClick={ btnLogout }
            >
              <Link to="/auth/login">
                Logout
                </Link>
              </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

