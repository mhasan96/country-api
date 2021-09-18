const loadCountries = () => {
  fetch("https://restcountries.eu/rest/v2/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  console.log(countries[0]);
  const container = document.getElementById("countries");
  const countryHtml = countries.map((country) => getCountryHtml(country));
  container.innerHTML = countryHtml.join(" ");
  console.log(countryHtml);
};
const getCountryHtml = (country) => {
  return `
        <div class="country">
            <h2>${country.name}</h2>
            <h4>${country.capital}</h4>
            <img src="${country.flag}">
        </div>
    `;
};
loadCountries();
