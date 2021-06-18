import { RETRIEVE_products } from "../action/productType";


const initialState = []
   
const productReducer = (state = initialState,action) => {
    const {type,payload}=action;
    switch (type){
        case RETRIEVE_products:
            return payload;
        default: 
        return state    
    }
  }
  
  export default productReducer