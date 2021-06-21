
import ecommService from "../services/ecommService";
import { RETRIEVE_productDetails } from "./productDetailsType";



  export const retrieveProductDetails = (id) => async (dispatch) => {
    try {
      const res = await ecommService.getProductDetails(id);
  
      dispatch({
        type: RETRIEVE_productDetails,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  