const loadQuotes = async () => {
  const url = "https://api.kanye.rest/";
  const res = await fetch(url);
  const data = await res.json();
  displayQuote(data);
};

const displayQuote = (quote) => {
  const quoteContainer = document.getElementById("container");
  quoteContainer.innerHTML = `
  <p>${quote.quote}</p>
  `;
};

loadQuotes();
