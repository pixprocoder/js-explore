function loadData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayData(data));
}

function displayData(data) {
  for (const item of data) {
    const title = item?.title;
    const div = document.getElementById("post");
    const p = document.createElement("p");
    p.innerText = `${title}`;
    div.appendChild(p);
  }
}
