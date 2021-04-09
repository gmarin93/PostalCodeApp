import { combineReducers } from "redux";
import PostalCodeReducer from "./PostalCodeReducer";

export default combineReducers({
  postalCodeInfo: PostalCodeReducer,
});
