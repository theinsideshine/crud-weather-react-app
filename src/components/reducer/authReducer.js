import { types } from "../../types/types";


const initialState = {
    udi : 123123 ,
    name: 'Fernando',
    
}




export const authReducer = ( state = { initialState }, action ) => {


    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }

        case types.logout:
            return {}          
    
        default:
            return state;
    }
}