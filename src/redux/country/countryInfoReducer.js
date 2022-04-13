import {
  fetchFullCountyInfo,
  makeCountryMapImageURL,
} from '../apiCalls/apiCalls';

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
    const countryInfo = [];
    result.data.forEach((country) => {
      countryInfo.push({
        id: country.name.common,
        name: country.name.common,
        code: country.cca3,
        continent: country.continents[0],
        subRegions: country.subregion,
        maps: makeCountryMapImageURL(country.cca3),
        flag: country.flags.svg,
      });
      dispatch(fetchInfo(countryInfo));
    });
  });
};

export default countryInfoReducer;
