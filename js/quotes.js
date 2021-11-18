const quotes = [
  {
    quote: "The first principle is that you must not fool yourself and you are the easiest person to fool.",
    author: "Richard Feynman",
  },
  {
    quote: "Change the way you look at things and things you look at change.",
    author: "Wayne Dyer",
  },
  {
    quote: "The way to love anything is to realize that it may be lost.",
    author: "Gilbert K. Chesterton",
  },
  {
    quote: "Life is from the inside out. When you shift on the inside, life shifts on the outside.",
    author: "Kamal Ravikant",
  },
  {
    quote: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    quote: "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
    author: "Dale Carnegie",
  },
  {
    quote: "Reading is important, because if you can read, you can learn anything about everything and everything about anything.",
    author: "Tomie dePaola",
  },
  {
    quote: "Let everyone be respected as an individual and no everyone idolized.",
    author: "Albert Einstein",
  },
  {
    quote: "Love is a serious mental disease.",
    author: "Plato",
  },
  {
    quote: "However difficult life may seem, there is always something you can do and succeed at.",
    author: "Stephen Hawking",
  }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;