import { RETRIEVE_productDetails } from "../action/productDetailsType";



const initialState = []
   
const productDetailsReducer = (state = initialState,action) => {
    const {type,payload}=action;
    switch (type){
        case RETRIEVE_productDetails:
            return payload;
        default: 
        return state    
    }
  }
  
  export default productDetailsReducer