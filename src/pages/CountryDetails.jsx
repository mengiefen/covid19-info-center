import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { CardWrapper, Container, RegionCard } from './Details.styled';
import { getAllInfoFromAPI } from '../redux/country/countryInfoReducer';

const CountryDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const countryInfo = useSelector((state) => state.countryInfo);
  const covidData = useSelector((state) => state.covidData);

  useEffect(() => {
    if (countryInfo.length === 0) {
      dispatch(getAllInfoFromAPI());
    }
  }, []);

  const countryDetail = countryInfo.find(
    (country) => country.name === params.country,
  );

  const covidDetail = covidData.find((data) => data.name === params.country);

  return (
    <Container>
      <div className="country-flag">
        <img src={countryDetail.flag} alt={`${countryDetail.name} flag`} />
      </div>
      <h2 className="country-name">{covidDetail.name}</h2>
      <img
        src={countryDetail.maps}
        alt={countryDetail.name}
        className="country-map"
      />
      <CardWrapper>
        <RegionCard>
          <table className="country-detail">
            <tbody>
              <tr>
                <td className="head">Total Confirmed</td>
                <td>{covidDetail.todayConfirmed}</td>
              </tr>
              <tr>
                <td className="head">Last 24 Hour</td>
                <td>{covidDetail.todayNewConfirmed}</td>
              </tr>
              <tr>
                <td className="head">Total Deaths</td>
                <td>{covidDetail.todayDeaths}</td>
              </tr>
              <tr>
                <td className="head">Last 24 Hour</td>
                <td>{covidDetail.todayNewDeaths}</td>
              </tr>
              <tr>
                <td className="head">Total New Open Cases</td>
                <td>{covidDetail.todayOpenCases}</td>
              </tr>
              <tr>
                <td className="head">Total Recovered</td>
                <td>{covidDetail.todayRecovered}</td>
              </tr>
              <tr>
                <td className="head">Today New Recoverd</td>
                <td>{covidDetail.todayNewRecovered}</td>
              </tr>
            </tbody>
          </table>
        </RegionCard>
      </CardWrapper>
    </Container>
  );
};

export default CountryDetails;
