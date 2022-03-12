import React, { useState } from 'react';


import {makeStyles} from '@material-ui/core/styles';
import {Box, Grid ,Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Modal, Button, TextField}  from '@material-ui/core';
import {Edit, Delete} from '@material-ui/icons';
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

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
  

  const user =[
    {
      id: 1,
      name: 'Pablo Oscar',
      surname: 'Tavolaro Ortiz',
      phone: '15-4545-8978',
      msj: 'Pink'
    },
    {
      id: 2,
      name: 'Anabel Natalia',
      surname: 'Reta',
      phone: '15-4571-0008',
      msj: 'Black'
    },
    {
      id: 3,
      name: 'Pablo Oscar',
      surname: 'Tavolaro Ortiz',
      phone: '15-4545-8978',
      msj: 'Pink'
    },
    {
      id: 4,
      name: 'Anabel Natalia',
      surname: 'Reta',
      phone: '15-4571-0008',
      msj: 'Black'
    },
    {
      id: 5,
      name: 'Pablo Oscar',
      surname: 'Tavolaro Ortiz',
      phone: '15-4545-8978',
      msj: 'Pink'
    },
    {
      id: 6,
      name: 'Pablo Oscar',
      surname: 'Tavolaro Ortiz',
      phone: '15-4545-8978',
      msj: 'Pink'
    },
    {
      id: 7,
      name: 'Anabel Natalia',
      surname: 'Reta',
      phone: '15-4571-0008',
      msj: 'Black'
    },
    

  ];

const Crud = () => {
  const styles= useStyles();
  const [modalEliminar, setModalEliminar]=useState(false);
  const [modalEditar, setModalEditar]=useState(false);

   
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
    console.log(selectConsole);
  }

  const peticionPut=()=>{
    
     // setData(dataNueva);
      abrirCerrarModalEditar();
    }
  
  const peticionDelete=()=>{
   
      abrirCerrarModalEliminar();
      }

      const bodyEditar=(
        <div className={styles.modal}>
          <h3>Editar Consola</h3>
          <TextField name="nombre" className={styles.inputMaterial} label="Nombre" onChange={handleChange} value={selectConsole && selectConsole.name}/>
          <br />
          <TextField surname="apellido" className={styles.inputMaterial} label="Apellido" onChange={handleChange} value={selectConsole && selectConsole.surname}/>
          <br />
          <TextField phone="telefono" className={styles.inputMaterial} label="Telefono" onChange={handleChange} value={selectConsole && selectConsole.phone}/>
          <br />
          <TextField name="msj" className={styles.inputMaterial} label="Mensaje" onChange={handleChange} value={selectConsole && selectConsole.msj}/>
          <br /><br />
          <div align="right">
            <Button color="primary" onClick={()=>peticionPut()}>Editar</Button>
            <Button onClick={()=>abrirCerrarModalEditar()}>Cancelar</Button>
          </div>
        </div>
      )
 
  const bodyEliminar=(
    <div className={styles.modal}>
      <p>Estás seguro que deseas eliminar la consola <b>{selectConsole && selectConsole.name}</b> ? </p>
      <div align="right">
      <Button color="secondary" onClick={()=>peticionDelete()} >Sí</Button>
        <Button onClick={()=>abrirCerrarModalEliminar()}>No</Button>

      </div>

    </div>
  )

  const abrirCerrarModalEditar=()=>{
    setModalEditar(!modalEditar);
  }

  const abrirCerrarModalEliminar=()=>{
    setModalEliminar(!modalEliminar);
  }

  const ConsoleSelect=(console, caso)=>{
    setSelectConsole(console);
    (caso==='Editar')?abrirCerrarModalEditar():abrirCerrarModalEliminar()
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
                open={modalEditar}
                onClose={abrirCerrarModalEditar}>
                {bodyEditar}
              </Modal>

              <Modal
                open={modalEliminar}
                onClose={abrirCerrarModalEliminar}>
                {bodyEliminar}
              </Modal>
            </Grid>
    
            <Grid item xs={1} sm={2}>                                
             </Grid> 
              
          </Grid>
        
        
  );    
}

export default Crud;