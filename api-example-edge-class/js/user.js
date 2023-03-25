const randomUser = () => {
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => displayUser(data));
};

const displayUser = (data) => {
  const users = data.results;
  users.forEach((data) => {
    const firstName = data.name.first;
    const secondName = data.name.last;
    const fullName = firstName + " " + secondName;
    const img = data.picture.large;
    console.log(data);
    const displayDiv = document.getElementById("user-container");
    const createdDiv = document.createElement("div");
    createdDiv.innerHTML = `
    <img src=${img} alt="">
    <h2>${fullName}</h2>
    <h5>${data.email}</h5>
    `;
    createdDiv.classList.add("user");
    displayDiv.appendChild(createdDiv);
  });
};

randomUser();
