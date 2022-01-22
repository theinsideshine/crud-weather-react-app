
import { types } from '../types/types';



export const startLogin = ( email, password ) => {

        return ( dispatch ) => {
                setTimeout ( () => {
                        dispatch ( login( email,password) );
                },3500)
        }
}

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
        console.log(response);
        if (response.status === 200) {
                
                dispatch ( login( email,password) );
        }else {
                console.log('error');
        }
}


export const login = ( uid, displayName ) => ({ // return

        type: types.login,
        payload: {
            uid,
           displayName
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