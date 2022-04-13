import covidDataReducer, { fetchData } from '../redux/country/covidDataReducer';
import countryInfoReducer, {
  fetchInfo,
} from '../redux/country/countryInfoReducer';

describe('Covid Data Reducers', () => {
  const initialState = [];

  const payload = [{
    id: 'afghanistan',
    name: 'Afghanistan',
    regions: Array[('region1', 'region2')],
    todayConfirmed: 176201,
    todayDeaths: 7643,
    todayNewConfirmed: 162,
    todayNewDeaths: 2,
    todayNewOpenCases: 160,
    todayNewRecovered: 0,
    todayOpenCases: 85972,
    todayRecovered: 82586,
  }];

  it('should handle store fetch covid Data to store', () => {
    const actual = covidDataReducer(initialState, fetchData(payload));
    expect(actual.length).toEqual(1);
  });

  it('should handle store fetch Country Information to store', () => {
    const actual = countryInfoReducer(initialState, fetchInfo(payload));
    expect(actual.length).toEqual(1);
  });
});
