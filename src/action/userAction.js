
import ecommService from "../services/ecommService";
import { RETRIEVE_user } from "./userType";




  export const retrieveUser = () => async (dispatch) => {
    try {
      const res = await ecommService.getAccountDetails();
  
      dispatch({
        type: RETRIEVE_user,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  