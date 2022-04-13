import { fetchCovidData } from '../apiCalls/apiCalls';

const FETCH = 'capstone/country/FETCH_COVID_DATA';

const initialState = [];

const covidDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH:
      if (state.length > 0) return state;
      return action.payload;
    default:
      return state;
  }
};

const getFullDate = () => {
  const date = new Date();
  return `${date.getFullYear()}-${`0${date.getMonth() + 1}`.slice(
    -2,
  )}-${`0${date.getDate()}`.slice(-2)}`;
};

export const fetchData = (payload) => ({
  type: FETCH,
  payload,
});

export const getCovidDataFromAPI = () => async (dispatch) => {
  const covidData = [];
  await fetchCovidData(getFullDate()).then((result) => {
    Object.entries(result).forEach((value) => {
      const data = value[1];
      covidData.push({
        id: data.id,
        name: data.name,
        regions: data.regions,
        todayConfirmed: data.today_confirmed,
        todayDeaths: data.today_deaths,
        todayNewConfirmed: data.today_new_confirmed,
        todayNewDeaths: data.today_new_deaths,
        todayNewOpenCases: data.today_new_open_cases,
        todayNewRecovered: data.today_new_recovered,
        todayOpenCases: data.today_open_cases,
        todayRecovered: data.today_recovered,
      });
    });
    dispatch(fetchData(covidData));
  });
};

export default covidDataReducer;
