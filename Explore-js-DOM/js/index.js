// where to add (Parent container)
const mainContainer = document.getElementById("main-container");

// Create the element
const section = document.createElement("section");
const h1 = document.createElement("h1");
// write the text for the element
h1.innerText = "Welcome to my Blog - 4";
const p = document.createElement("p");
p.innerText = `This is lorem text. that's mean those texts are has no meaning. meaningless text for showing that this is an dummy text for testing purpose. you have some option to show the text. there are some website they can provide dummy text from lorem ipsum. on the other hand you can copy and past from anywhere on the internet. the last thing you can do is that write on yourself like I am doing now. It could be the real text or the dummy text like whatever come into your mind just let them write it will improve you writing skill more and more efferent. so that's is for ${h1}`;
const btn = document.createElement("button");
btn.innerText = "New me";

// Appended to the section
section.appendChild(h1);
section.appendChild(p);
section.appendChild(btn);
mainContainer.appendChild(section);

// dynamic style
// btn.setAttribute("id", "section-title2");
const buttonStyle = document.querySelectorAll("button");
for (const btn of buttonStyle) {
  btn.setAttribute("id", "section-title2");
  btn.style.display = "block";
  btn.style.width = "20%";
  btn.style.margin = "0 auto";
  btn.style.cursor = "pointer";
  btn.style.border = "none";
  btn.style.backgroundColor = "lightgray";
  btn.style.padding = "7px 0";
  btn.style.fontSize = "1em";
  btn.style.fontWeight = "bold";
  btn.style.color = "black";
  btn.style.textTransform = "uppercase";
}

// adding class Dynamically
section.classList.add("section-container");
