
//initial state
export const initialMessage = {
    name : 'Alu',
    age : 110,
    skill : 'IOS',
    error : false
}

//message reducers
export const messageReducer = ( state, { type, payload} ) => {
    console.log(payload);

    

    switch(type){
        
        case 'DEVS_DATA_LOAD' : 
            return state = {...state,...payload}; 
        
        case 'ALERT_LOAD' :  
            let err_val = (payload.error === 'Start') ? true : false
            return state = {...state, error : err_val}; 

        default :
            return state;

    }
}
