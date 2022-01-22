
import { types } from '../types/types';


        /*
        *    Se encarga de registrase en el servidor
        */

export const startRegisterEmailPassword = ( email, password, name, surname ) => async dispatch => {

        console.log (email, password, name, surname );
        const response = await fetch('http://localhost:8080/api/users/register', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body:JSON.stringify( {

                        email: email,
                        password: password,
                        name: name,
                        surname: surname,
                        phone: '',
                        msj: ''
                        
                })
            });
            const data = await response.json();
            console.log(data);
        if (response.status === 200) {
                console.log('Registro ok.');
               
        }else {
                console.log('Register error');
        }
}

/*
*    Se encarga de loggearse en el servidor, 
*/

export const startLogin = ( email, password) => async dispatch => {

        console.log (email, password);
        const response = await fetch('http://localhost:8080/api/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body:JSON.stringify( {

                        email: email,
                        password: password       
                        
                })
            });
            const data = await response.json();
            console.log(data);
        if (response.status === 200) {
                console.log('Login ok.');                
                dispatch ( login( email, password, data.token) ); 
        }else {
                console.log('Login error');
        }
}



export const login = ( uid, name, token ) => ({ // return

        type: types.login,
        payload: {
            uid,
           name,
           token
        }

})

/*

aca debo hacer el una accion que dispare el fecth cuando esta termina devuelve el dispatch y ahi hago el login 


vue
url_register: 'http://localhost:8080/api/users/register'

 let parameters = {
        email: this.contact.email,
        password: this.contact.password,
        name: this.contact.name,
        surname: this.contact.surname,
        phone: this.contact.phone,
        msj: this.contact.msj
        };

 java

           @CrossOrigin(origins = "http://localhost:8081")
    @RequestMapping(value="users/register" , method = RequestMethod.POST )


    juan
    export const apiAddTask = async (dispatch, task, alert) => {
    const response = await fetch('http://localhost:3001/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    });

    */