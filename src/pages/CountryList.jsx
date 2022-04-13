import React, { useEffect, useState } from 'react';
import { HiOutlineArrowCircleRight, HiOutlineSearch } from 'react-icons/hi';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RegionCard, CardWrapper, Container } from './Details.styled';
import AFRICA from '../assets/images/continents/africa1.svg';
import EUROPE from '../assets/images/continents/europe.svg';
import NORTH_AMERICA from '../assets/images/continents/north_america.svg';
import SOUTH_AMERICA from '../assets/images/continents/latin_america.svg';
import AUSTRALIA from '../assets/images/continents/australia.svg';
import ASIA from '../assets/images/continents/asia2.svg';
import { getCovidDataFromAPI } from '../redux/country/covidDataReducer';
import { getAllInfoFromAPI } from '../redux/country/countryInfoReducer';

const CountryList = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const covidData = useSelector((state) => state.covidData);
  const countryInfo = useSelector((state) => state.countryInfo);
  const [countries, setCountries] = useState([]);
  const [merged, setMerged] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const continentMap = {
    Africa: AFRICA,
    Europe: EUROPE,
    Australia: AUSTRALIA,
    Asia: ASIA,
    'South America': SOUTH_AMERICA,
    'North America': NORTH_AMERICA,
  };

  useEffect(() => {
    const newMerged = countryInfo.map((info) => {
      const value = covidData.find((country) => country.name === info.name);
      return { ...info, ...value };
    });
    setMerged(newMerged);
    setCountries(newMerged);
  }, [covidData, countryInfo]);

  useEffect(() => {
    if (covidData.length === 0 || countryInfo.length === 0) {
      dispatch(getCovidDataFromAPI());
      dispatch(getAllInfoFromAPI());
    }
  }, []);

  const handleNavigation = (id) => {
    navigate(`/${params.continent}/${id}`);
  };

  const handleSearchFilter = (searchValue) => {
    setSearchQuery(searchValue);
    if (searchQuery) {
      const filteredData = merged.filter((country) => {
        const newValue = country.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        return newValue;
      });
      setCountries(filteredData);
    } else {
      setCountries(merged);
    }
  };

  return (
    <Container bg={continentMap[params.continent]}>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          id="country"
          className="country-search"
          placeholder="Search by country"
          onChange={(e) => handleSearchFilter(e.target.value)}
        />
        <button type="button" className="btn-search">
          <HiOutlineSearch />
        </button>
      </form>
      <CardWrapper>
        {countries
          .filter(
            (country) => country.continent
            && country.continent
              .toLowerCase()
              .includes(params.continent.toLowerCase()),
          )
          .map(
            (countryData) => countryData.todayConfirmed && (
              <RegionCard key={countryData.id}>
                <h3 className="country-name">{countryData.name}</h3>
                <HiOutlineArrowCircleRight
                  onClick={() => handleNavigation(countryData.name)}
                  className="open-icon"
                />
                <div className="summary">
                  <div className="col-1">
                    <h3>Active</h3>
                    <h4>{`Total: ${countryData.todayConfirmed}`}</h4>
                    <h4>{`Last 24: ${countryData.todayNewConfirmed}`}</h4>
                  </div>
                  <div className="col-2">
                    <h3>Deaths</h3>
                    <h4>{`Total: ${countryData.todayDeaths}`}</h4>
                    <h4>{`Last 24: ${countryData.todayNewDeaths}`}</h4>
                  </div>
                  <div className="col-3">
                    <h3>Recovered</h3>
                    <h4>{`Total: ${countryData.todayRecovered}`}</h4>
                    <h4>{`Last 24: ${countryData.todayRecovered}`}</h4>
                  </div>
                </div>
              </RegionCard>
            ),
          )}
      </CardWrapper>
    </Container>
  );
};

export default CountryList;
