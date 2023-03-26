const loadCountries = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  displayCountry(data);
};

const displayCountry = (countries) => {
  console.log(countries);
  countries.forEach((country) => {
    // console.log(country);
    const parentContainer = document.getElementById("card");
    const div = document.createElement("div");
    parentContainer.innerText = "";
    div.classList.add("col");
    div.innerHTML = `
          <div class="card h-100">
            <img src="${country.flags.svg}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-primary fs-3 fw-bolder">${
                country.name.common
              }</h5>
              <p class="card-text">
                <span class="fs-5 fw-bolder">Capital: </span> ${
                  country?.capital
                }
              </p>
            </div>
            <div class="card-footer">
             Area: <small class="text-body-secondary">${
               country.area ? country.area : "No capital "
             }</small>
            </div>
          </div>
    `;
    parentContainer.appendChild(div);
  });
};

const loadButton = (id) => {
  const loadByRegion = async (region) => {
    const url = `https://restcountries.com/v3.1/region/${region}`;
    const res = await fetch(url);
    const data = await res.json();
    displayCountry(data);
  };
  //   const searchField = document.getElementById("search-field").value;
  loadByRegion(id);
};

loadCountries();
