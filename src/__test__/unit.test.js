import {
  getFullDate,
  makeCountryMapImageURL,
  selectCountryInfo,
} from '../redux/apiCalls/apiCalls';

describe('unit test for pure function', () => {
  test('return todays date in yyyy-mm-dd format', () => {
    const date = '2022-03-14';
    const returnedDate = getFullDate();
    expect(returnedDate).toMatch(date);
  });

  test('return formatedUrl for image fetching', () => {
    const url = 'https://gadm.org/img/480/gadm/ETH/ETH_labs.png';
    const returnedUrl = makeCountryMapImageURL('ETH');
    expect(returnedUrl).toMatch(url);
  });

  test('return selected country informations', () => {
    const data = [
      {
        name: { common: 'Ethiopa' },
        cca3: 'ETH',
        continents: ['Africa'],
        subregion: 'East Africa',
        maps: 'urlmap',
        flags: { svg: 'urlsvg' },
        borders: 'some value',
        population: '100000000',
      },
    ];

    const selected = selectCountryInfo(data);

    expect(selected).toHaveLength(1);
  });
});
