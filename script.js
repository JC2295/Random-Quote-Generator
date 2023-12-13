let quoteObjArr = [
  { name: "Oscar Wilde", quote: "Be yourself; everyone else is already taken." },
  { name: "Albert Einstein", quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”" },
  { name: "Marcus Tullius Cicero", quote: "A room without books is like a body without a soul." },
  { name: "Frank Zappa", quote: "So many books, so little time." },
  { name: "Bernard M. Baruch", quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind." },
  { name: "Dr. Seuss", quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams." },
  { name: "Mark Twain", quote: "If you tell the truth, you don't have to remember anything." }
];

let generateButton = document.querySelector("#generate");

let quoteContainer = document.querySelector("#quote");

let nameContainer = document.querySelector("#name");

quoteContainer.innerText = quoteObjArr[0]["quote"];

generateButton.addEventListener("click", generateQuote);

function generateQuote() {

  let randomNumber = Math.floor(Math.random() * quoteObjArr.length);

  quoteContainer.innerText = quoteObjArr[randomNumber].quote;

  nameContainer.innerText = quoteObjArr[randomNumber].name;

}