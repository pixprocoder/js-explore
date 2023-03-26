const loadQuotes = async () => {
  try {
    const url = "https://api.kanye.rest/";
    const res = await fetch(url);
    const data = await res.json();
    displayQuote(data);
  } catch (error) {
    console.log(error);
  }
};

const displayQuote = (quote) => {
  const quoteContainer = document.getElementById("container");
  quoteContainer.innerHTML = `
  <p>${quote.quote}</p>
  `;
};

loadQuotes();
