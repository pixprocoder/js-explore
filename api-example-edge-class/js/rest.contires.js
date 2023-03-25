const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  for (const country of countries) {
    console.log(country);
    const img = country.flags.png;
    const name = country.name.common;
    const area = country.area;
    console.log(area);

    const parentDiv = document.getElementById("container");
    const countryDiv = document.createElement("div");
    countryDiv.innerHTML = `
    <img src=${img} alt="">
    <div>
    <h4>${name}</h4>
    <p>${area}</p>
    </div>
    `;
    countryDiv.classList.add("country");
    parentDiv.appendChild(countryDiv);
  }
};

loadCountries();
