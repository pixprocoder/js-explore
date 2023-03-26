const person = {
  found: 2,
  message: "Found 2 persons",
  result: [
    {
      name: {
        common: "John",
        fullName: ["John", "Doe"],
      },
      age: 32,
      isMale: false,
      address: {
        street: "13/A St Joseph",
        house: 10,
      },
    },
    {
      name: {
        common: "Humayoun",
        fullName: ["Humayoun", "Kabir"],
      },
      age: 33,
      isMale: false,
      address: {
        street: "13/A St Lucia",
        house: 11,
      },
    },
  ],
};

const displayPerson = (data) => {
  data.result.forEach((person) => {
    // console.log(person);
    const cardContainer = document.getElementById("card-container");
    const cardBody = document.createElement("div");
    cardBody.classList.add("card");
    cardBody.classList.add("mx-2");
    const fullName = person.name.fullName[0] + " " + person.name.fullName[1];
    const age = person.age;
    console.log(person.address);
    const address = person.address.street + " house:" + person.address.house;
    console.log(address);

    cardBody.innerHTML = `
    <div class="card-header">Name: ${fullName}</div>
    <div class="card-body">
        <h5 class="card-title">age: ${age} </h5>
        <p class="card-text">
           address: ${address}
        </p>
        
    </div>
    `;
    cardContainer.appendChild(cardBody);
  });
};

displayPerson(person);
