const getAllCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => displayCountries(data))
}

getAllCountries();


const displayCountries = countries => {

    const countriesDiv = document.getElementById('allCountry');

    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div')
        div.classList.add('country');
        div.innerHTML = `
            <h3>${country.name.common}</h3>
            <p>${country.capital}</p>
            <button onclick = "loadCoutryName('${country.name.common}')">Details</button>
        `
        countriesDiv.appendChild(div);
    
    });



}

const loadCoutryName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountriesDetails(data[0]))
}


const displayCountriesDetails = contry => {
    console.log(contry);
    const countryDiv = document.getElementById('country-Details');
    countryDiv.innerHTML = `
        <h5>${contry.name.common}</h5>
        <p>population: ${contry.population}</p>
        <img width="200px" src="${contry.flags.png}">
    `
}