import React , { useState } from 'react';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { startLogin } from '../../action/auth';
import { setError, removeError } from '../../action/ui';
import { ErrorForm } from '../errorForm/errorForm';



import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme();

const Login = () => {


  const dispatch = useDispatch ();
  const { msgError } = useSelector ( state => state.ui  );

  
  const [ email, setEmail] = useState('nando@gmail.com');
  const [ password, setPassword] = useState('123456');

  const handleLogin = (event) => {

    event.preventDefault();   
   
    console.log( email, password);

    if ( isFormValid () ) {
    
      console.log('Formulario correcto.');
      
      dispatch( startLogin ( email , password ));
      
    }

  };

  
  const isFormValid = () => {    
    
     if ( !validator.isEmail ( email) ){

       dispatch ( setError('El mail es incorrecto'));
       return false;
     }

     if ( password.length < 5 ){
      dispatch ( setError('La contraseña debe tener min 6 caracteres'));
       return false;
     }
   
     dispatch ( removeError());
     return true;
   }


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          { ErrorForm ( msgError )}
          <Box component="form" onSubmit={handleLogin}  sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo electronico"
              name="email"
              autoComplete="email"
              autoFocus              
              value={ email }
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={ password }
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Entrar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="" variant="body2">
                  Olvido su contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/auth/register" variant="body2">
                  {"No tiene una cuenta? Registrese"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
  );
}

export default Login;

//https://jasonwatmore.com/post/2017/12/07/react-redux-jwt-authentication-tutorial-example