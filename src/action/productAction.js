import { CREATE_products,RETRIEVE_products,DELETE_products,UPDATE_products} from "./productType";
import ecommService from "../services/ecommService";



  export const retrieveProducts = () => async (dispatch) => {
    try {
      const res = await ecommService.getProduct();
  
      dispatch({
        type: RETRIEVE_products,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
 