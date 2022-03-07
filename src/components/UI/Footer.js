import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

export const Copyright=() => {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        <br></br>
        <br></br>
        {'Copyright © '}
        <Link color="inherit" href="https://www.mbsoft.com.ar/">
          MbSoft
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  export const Footer=() => {
    return (
        <Box>        
          <Copyright />
        
      </Box>
   
            );
        }   