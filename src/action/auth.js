import  Swal from 'sweetalert2';

import { types } from '../types/types';
import { finishLoading, startLoading } from './ui';
import { fetchWithoutToken } from '../helpers/fetch';
import { setError } from './ui';

const phone= '';
const msj='';

        /*
        *   It is responsible for registering on the server
        */

export const startRegister = ( email, password, name, surname ) =>  {
       
        return async( dispatch ) => {     

                //console.log (email, password);
                dispatch (startLoading());    // Register loading control

                const response = await fetchWithoutToken( 'users/register', { email, password,name,surname,phone,msj }, 'POST' );
                const body = await response.json();
                console.log (body);
               

                if (body.result === 'OK') {

                 dispatch (finishLoading());
                 Swal.fire(body.message);
                 console.log(body.message);
                        
               

                }else {
                Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: body.message                       
                        });
                console.log(body.message);
                 dispatch (finishLoading());

                }

        }
}

/*
*    It is responsible for logging on the server
*/

export const startLogin = ( email, password)  => {
        
        return async( dispatch ) => {     

                //console.log (email, password);
                dispatch (startLoading());    // Register loading control

                const response = await fetchWithoutToken( 'login', { email, password }, 'POST' );
                const body = await response.json();
                console.log (body);

                if (body.result === 'OK') {

                 dispatch (finishLoading());
                 Swal.fire(body.message);
                 console.log(body.message);

                 // You have to modify the back to support re-authentication 

                localStorage.setItem('token', body.token );
                localStorage.setItem('token-init-date', new Date().getTime() ) ; 
                localStorage.setItem('uid', email );
                localStorage.setItem('name', body.name );

                dispatch( login({
                        uid :email,
                        name: body.name
                }) )               
                        
                }else {
                        Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: body.message                       
                                });

                console.log(body.message);
                 dispatch (finishLoading());
                 dispatch ( setError('Error de loggin'));

                }

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

export  const logout = () => ({

        type: types.logout
    })