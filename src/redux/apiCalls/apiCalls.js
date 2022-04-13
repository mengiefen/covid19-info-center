import axios from 'axios';

const infoURL = 'https://restcountries.com/v3.1/region/';

const makeCountryMapImageURL = (code) => {
  const url = `https://gadm.org/img/480/gadm/${code}/${code}_labs.png`;
  return url;
};

const infoData = axios.create({
  baseURL: infoURL,
});

const getFullDate = () => {
  const date = new Date();
  return `${date.getFullYear()}-${`0${date.getMonth()}`.slice(
    -2,
  )}-${`0${date.getDate()}`.slice(-2)}`;
};

const date = getFullDate();

const covidDataURL = `https://api.covid19tracking.narrativa.com/api?date_from=${date}&date_to=${date}`;

const fetchCovidData = async () => {
  const response = await axios.get(covidDataURL);
  return response.data.dates[date].countries;
};

const selectCountryInfo = (data) => {
  const countryInfo = [];
  data.forEach((country) => {
    countryInfo.push({
      id: country.name.common,
      name: country.name.common,
      code: country.cca3,
      continent: country.continents[0],
      subRegions: country.subregion,
      maps: makeCountryMapImageURL(country.cca3),
      flag: country.flags.svg,
    });
  });

  return countryInfo;
};

const fetchFullCountyInfo = async () => {
  const countryInfo = await infoData.get('https://restcountries.com/v3.1/all');
  return countryInfo;
};

export {
  fetchFullCountyInfo,
  getFullDate,
  fetchCovidData,
  makeCountryMapImageURL,
  selectCountryInfo,
};
