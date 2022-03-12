import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';

import { Link, useHistory } from 'react-router-dom';

import { setError, removeError } from '../../action/ui';
import { ErrorForm } from '../../components/errorForm/errorForm';


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

import { startRegister } from '../../action/auth';




const theme = createTheme();

const   Register= () => {


  const dispatch = useDispatch ();   
  const { msgError , loading } = useSelector ( state => state.ui  );
   
  
  const [ name, setName] = useState('Hernando!');
  const [ surname, setSurName] = useState('Hijus');
  const [ email, setEmail] = useState('@gmail.com');
  const [ password, setPassword] = useState('123456');
  const history = useHistory();



  const handleRegister = (e) => {
    e.preventDefault();
   
   

    console.log(name,surname,email,password);

    if ( isFormValid () ) {
    
      console.log('Formulario correcto.');

      dispatch( startRegister ( email, password, name, surname ));
      history.push("/auth/login");
    }
  }

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
      <Container component="main" maxWidth="xs" > 
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
            Registrar
          </Typography>
          { ErrorForm ( msgError )}
          <Box component="form"  onSubmit={ handleRegister } sx={{ mt: 3 }}>
            <Grid container spacing={2}>

              
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Nombre"
                  autoFocus
                  value={ name }
                  onChange={(e) => setName(e.target.value)}
                  
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="surName"
                  label="Apellido"
                  name="surname"
                  autoComplete="family-name"
                  value={ surname }
                  onChange={(e) => setSurName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Correo Electronico"
                  name="email"
                  autoComplete="email"
                  value={ email }
                  onChange={(e) => setEmail(e.target.value)}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={ password }
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Quiero recibir inspiración, promociones de marketing y actualizaciones por correo electrónico."
                />
              </Grid>
            </Grid>
            <Button
              disabled = {loading}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrar
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/auth/login" variant="body2">
                  Ya tiene una cuenta? Entrar
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );

 
}
export default Register;