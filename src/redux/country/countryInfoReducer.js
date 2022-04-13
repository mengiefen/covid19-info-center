import { fetchFullCountyInfo } from '../apiCalls/apiCalls';

const FETCH = 'capstone/country/FETCH_COUNTRY_INFO';

const initialState = [];

const countryInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH:
      if (state.length > 0) return state;
      return action.payload;
    default:
      return state;
  }
};

export const fetchInfo = (payload) => ({
  type: FETCH,
  payload,
});

export const getAllInfoFromAPI = () => async (dispatch) => {
  await fetchFullCountyInfo().then((result) => {
    dispatch(fetchInfo(result));
  });
};

export default countryInfoReducer;
