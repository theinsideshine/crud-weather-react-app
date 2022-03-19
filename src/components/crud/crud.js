import React, { useState, useEffect } from 'react';

import  Swal from 'sweetalert2';


import {makeStyles} from '@material-ui/core/styles';
import {Box, Grid ,Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Modal, Button, TextField}  from '@material-ui/core';
import {Edit, Delete} from '@material-ui/icons';
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

import { fetchWithToken } from '../../helpers/fetch';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  }
}));


const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 200,
    background: 'linear-gradient(180deg,#4D5DFB,#08C8F6)',   
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  iconos:{
    cursor: 'pointer'
  }, 
  inputMaterial:{
    width: '100%'
  },
  table: {
    minWidth: 900
  },
  narrowCell: {
    width: 150
  }
 
}));
  

 

const Crud = () => {
  const styles= useStyles();
  const [modalRemove, setmodalRemove]=useState(false);
  const [modalEdit, setmodalEdit]=useState(false);
  const [user, setUser]= useState([]);
  const [ userChange, setUserChange] =useState(false);  
  

        useEffect(() => {

          const ApiCall = async () => {    

              const response = await fetchWithToken('users/list',0,'GET');
              const body = await response.json();                          

              // Detecta si hubo resultados correctos en la consulta
            
              if(response.status === 200) {                  
                  setUser(body);                    
              } else {
                console.log();  // Incosistencia en los msj de error hay que reforma la devolucion de public List<Users> getUsers en el back
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Token error'                       
                  });
              }    
              setUserChange(false);             
        
      }

      ApiCall();  

      },[userChange]);
   
  const [selectConsole, setSelectConsole]=useState({
      name: '',
      surname: '',
      phone: '',
      msj: ''
  })

  const handleChange=e=>{
    const {name, value}=e.target;
    setSelectConsole(prevState=>({
      ...prevState,
      [name]: value
    }))
    
  }

  const petitionPut= async (selectConsole)=>{    
    
              const response = await fetchWithToken('users/update/',selectConsole,'PUT');             
              const body = await response.json(); 

              if(response.status === 200) {  
                Swal.fire(body.message);  
                console.log(body.message);                       
                  setUserChange(true);                    
              } else {
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: body.message                       
                  });
                console.log(body.message); 
              }  
   
      openClosemodalEdit();
    }
  
  const petitionDelete= async (id) =>{        
     
     

              const response = await fetchWithToken( `users/delete/${id}`,0,'DELETE');
              const body = await response.json();
                          
              if(response.status === 200) {                  
                  setUserChange(true);                    
              } else {
                console.log(body.message);
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: body.message                       
                  }); 
              }  
   
      openClosemodalRemove();
      }

      const bodyEdit=(
        <div className={styles.modal}>
          <h3>Editar Consola</h3>
          <TextField name="name" className={styles.inputMaterial} label="Nombre" onChange={handleChange} value={selectConsole && selectConsole.name}/>
          <br />
          <TextField name="surname" className={styles.inputMaterial} label="Apellido" onChange={handleChange} value={selectConsole && selectConsole.surname}/>
          <br />
          <TextField name="phone" className={styles.inputMaterial} label="Telefono" onChange={handleChange} value={selectConsole && selectConsole.phone}/>
          <br />
          <TextField name="msj" className={styles.inputMaterial} label="Mensaje" onChange={handleChange} value={selectConsole && selectConsole.msj}/>
          <br /><br />
          <div align="right">
            <Button color="primary" onClick={()=>petitionPut(selectConsole)}>Editar</Button>
            <Button onClick={()=>openClosemodalEdit()}>Cancelar</Button>
          </div>
        </div>
      )
 
  const bodyRemove=(
    <div className={styles.modal}>
      <p>Estás seguro que deseas eliminar la consola <b>{selectConsole && selectConsole.name}</b> ? </p>
      <div align="right">
      <Button color="secondary" onClick={()=>petitionDelete(selectConsole.id)} >Sí</Button>
        <Button onClick={()=>openClosemodalRemove()}>No</Button>

      </div>

    </div>
  )

  const openClosemodalEdit=()=>{
    setmodalEdit(!modalEdit);
  }

  const openClosemodalRemove=()=>{
    setmodalRemove(!modalRemove);
  }

  const ConsoleSelect=(console, caso)=>{
    setSelectConsole(console);
    (caso==='Editar')?openClosemodalEdit():openClosemodalRemove()
  }
 

    return (       
      
          <Grid container >
            <Grid item xs={1} sm={2}>  
                         
            </Grid>
            <Grid item xs={10} sm={8}>            
            
              <Box 
                  sx={{      
                    marginTop: 150,          
                    background: 'linear-gradient(180deg,#4D5DFB,#08C8F6)',
                    borderRadius: 15,
                
                }}>                  
                <TableContainer >
                  <Table className={styles.table}>
                      <TableHead >
                          <TableRow  >
                            <StyledTableCell>Nombre</StyledTableCell>
                            <StyledTableCell>Apellido</StyledTableCell>
                            <StyledTableCell>Telefono</StyledTableCell>
                            <StyledTableCell>Mensaje</StyledTableCell>
                            <StyledTableCell>Acciones</StyledTableCell>
                          </TableRow>
                      </TableHead>

                      <TableBody>
                          {user.map(console=>(
                              <TableRow key={console.id}>
                                  <TableCell className={styles.narrowCell}>{console.name}</TableCell>
                                  <TableCell className={styles.narrowCell}>{console.surname}</TableCell>
                                  <TableCell className={styles.narrowCell}>{console.phone}</TableCell>
                                  <TableCell className={styles.narrowCell}>{console.msj}</TableCell>
                                  <TableCell className={styles.narrowCell}>                                
                                    <Edit className={styles.iconos} onClick={()=>ConsoleSelect(console, 'Editar')}/>               
                                    &nbsp;&nbsp;&nbsp;
                                    <Delete  className={styles.iconos} onClick={()=>ConsoleSelect(console, 'Eliminar')}/>
                                  </TableCell>
                              </TableRow>
                          ))}
                      </TableBody>
                  </Table>
              </TableContainer> 
            </Box>  

              <Modal
                open={modalEdit}
                onClose={openClosemodalEdit}>
                {bodyEdit}
              </Modal>

              <Modal
                open={modalRemove}
                onClose={openClosemodalRemove}>
                {bodyRemove}
              </Modal>
            </Grid>
    
            <Grid item xs={1} sm={2}>                                
             </Grid> 
              
          </Grid>
        
        
  );    
}

export default Crud;