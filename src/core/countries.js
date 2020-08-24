import axios from "axios";

const URL_BASE = "https://restcountries.eu/rest/v2";

const getAllContries = async () => {
    const url = `${URL_BASE}/all`;

    //Retorna array de contries
    const { data } = await axios.get(url);

    const filterList = data.map((country, index) => {
      return {
        id: `country-${index}`,
        name: country.name,
        flag: country.flag,
        region: country.region,
        population: country.population,
        codigo: country.alpha3Code
      }
    })

    return filterList;
}

//Africa, Americas, Asia, Europe, Oceania
const getCountriesByRegion = async (region) => {

  const url = `${URL_BASE}/region/${region}`;

  const { data } = await axios.get(url);

  const filterList = data.map((country, index) => {
    return {
      id: `country-${index}`,
      name: country.name,
      flag: country.flag,
      region: country.region,
      population: country.population,
      codigo: country.alpha3Code
    }
  })

  return filterList;
}

export {
    getAllContries,
    getCountriesByRegion
}
