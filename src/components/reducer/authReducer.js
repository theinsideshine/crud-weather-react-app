import { types } from "../../types/types";


const initialState = {
    udi : 123123 ,
    name: 'Fernando',
    token: 'adsdadadl22411'
    
}




export const authReducer = ( state = { initialState }, action ) => {


    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName,
                token: action.payload.token
            }

        case types.logout:
            return {}          
    
        default:
            return state;
    }
}