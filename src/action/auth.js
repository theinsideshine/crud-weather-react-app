
import { types } from '../types/types';
import auth from '../components/auth/LocalStorage';




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
                dispatch ( login( email, data.name, data.token) ); 
                auth.setAll( email, data.name, data.token); 
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

