import React, {useEffect, useState} from 'react';
import '../../App.css';

import {makeStyles} from '@material-ui/core/styles';
import {Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Modal, Button, TextField}  from '@material-ui/core';
import {Edit, Delete} from '@material-ui/icons';



const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
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
    }
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
        <div className="App">
        
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Apellido</TableCell>
                            <TableCell>Telefono</TableCell>
                            <TableCell>Mensaje</TableCell>
                            <TableCell>Acciones</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {user.map(console=>(
                            <TableRow key={console.id}>
                            <TableCell>{console.name}</TableCell>
                            <TableCell>{console.surname}</TableCell>
                            <TableCell>{console.phone}</TableCell>
                            <TableCell>{console.msj}</TableCell>
                            <TableCell>                                
                                <Edit className={styles.iconos} onClick={()=>ConsoleSelect(console, 'Editar')}/>               
                                &nbsp;&nbsp;&nbsp;
                                <Delete  className={styles.iconos} onClick={()=>ConsoleSelect(console, 'Eliminar')}/>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>  

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
        </div>
  );    
}

export default Crud;