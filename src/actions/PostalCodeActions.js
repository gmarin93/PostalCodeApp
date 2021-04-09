import {
  GET_POSTALCODE_INFO,
  GET_POSTALCODE_INFO_SUCCESS,
  GET_POSTALCODE_INFO_ERROR,
} from "../types";

import AxiosClient from "../config/AxiosConfig";

/**
 * Get all postal codes data from json-server into db.json
 */
export function gtPostalCodeInfo() {
  return async (dispatch) => {
    dispatch(getPostalCodeInfoStart());

    try {
      await AxiosClient.get(`/postalcodes`).then((posts) => {
        dispatch(getPostalCodeInfoSuccess(posts.data));
      });
    } catch (error) {
      dispatch(getPostalCodeInfoError());
    }
  };
}

export const getPostalCodeInfoStart = () => ({
  type: GET_POSTALCODE_INFO,
});

export const getPostalCodeInfoSuccess = (data) => ({
  type: GET_POSTALCODE_INFO_SUCCESS,
  payload: data,
});

export const getPostalCodeInfoError = () => ({
  type: GET_POSTALCODE_INFO_ERROR,
});
