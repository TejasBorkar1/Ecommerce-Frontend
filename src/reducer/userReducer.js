import { RETRIEVE_user } from "../action/userType";



const initialState = []
   
const userReducer = (state = initialState,action) => {
    const {type,payload}=action;
    switch (type){
        case RETRIEVE_user:
            return payload;
        default: 
        return state    
    }
  }
  
  export default userReducer