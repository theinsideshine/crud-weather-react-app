
import { types } from '../types/types';
import { finishLoading, startLoading } from './ui';
import { fetchSinToken } from '../helpers/fetch';
        /*
        *    Se encarga de registrase en el servidor
        */

export const startRegister = ( email, password, name, surname ) =>  {
       
        return async( dispatch ) => {     

                //console.log (email, password);
                dispatch (startLoading());    // Control de loadind del login

                const resp = await fetchSinToken( '/users/register', { email, password,name,surname }, 'POST' );
                const body = await resp.json();
               // console.log (body);

                if (body.result === 'OK') {

                 dispatch (finishLoading());
                 console.log('register ok');
                        
               // Hay que modificar el back para que soporte re-autenticacion asi puede logearse

                }else {

                console.log('register error');
                 dispatch (finishLoading());

                }

        }
}

/*
*    Se encarga de loggearse en el servidor, 
*/

export const startLogin = ( email, password)  => {
        
        return async( dispatch ) => {     

                //console.log (email, password);
                dispatch (startLoading());    // Control de loadind del login

                const resp = await fetchSinToken( '/login', { email, password }, 'POST' );
                const body = await resp.json();
               // console.log (body);

                if (body.result === 'OK') {

                 dispatch (finishLoading());
                 console.log('Login ok');

                 // Hay que modificar el back para que soporte re-autenticacion 

                localStorage.setItem('token', body.token );
                localStorage.setItem('token-init-date', new Date().getTime() ) ; 
                localStorage.setItem('uid', email );
                localStorage.setItem('name', body.name );

                dispatch( login({
                        uid :email,
                        name: body.name
                }) )               
                        
                }else {

                console.log('Login error');
                 dispatch (finishLoading());

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