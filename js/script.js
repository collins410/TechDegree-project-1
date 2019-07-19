// An array of objects containing quotes
let quotes = [
  {
    quote: 'Knowing Is Not Enough, We Must Apply. Wishing Is Not Enough We Must Do.',
    source: 'Johann Wolfgang Von Goethe',
    sourceInfo: 'Who is <a href="http://en.wikipedia.org/wiki/Johann_Wolfgang_von_Goethe" target="_blank">Johann Wolfgang Von Goethe</a>'
  },
  {
    quote: 'Whether You Think You Can Or Think You Can’t, You’re Right.',
    source: 'Henry Ford',
    sourceInfo: `Who is <a href="http://en.wikipedia.org/wiki/Henry_Ford" target="_blank">Henry Ford</a>`
  },
  {
    quote: 'The Only Limit To Our Realization Of Tomorrow Will Be Our Doubts Of Today.',
    source: 'Franklin D. Roosevelt',
    sourceInfo: 'Who is <a href="http://en.wikipedia.org/wiki/Franklin_D._Roosevelt" target="_blank">Franklin D. Roosevelt</a>'
  },
  {
    quote: 'Creativity Is Intelligence Having Fun.',
    source: 'Albert Einstein',
    sourceInfo: 'Who is <a href="http://en.wikipedia.org/wiki/Albert_Einstein" target="_blank">Albert Einstein</a>'
  },
  {
    quote: 'What You Lack In Talent Can Be Made Up With Desire, Hustle And Giving 110% All The Time.',
    source: 'Don Zimmer',
    sourceInfo: 'Who is <a href="http://en.wikipedia.org/wiki/Don_Zimmer" target="_blank">Don Zimmer</a>'
  },
  {
    quote: 'Try not. Do... or do not.  There is no try.',
    source: 'Yoda',
    sourceInfo: 'Who is <a href="http://en.wikipedia.org/wiki/Yoda" target="_blank">Yoda</a>',
    citation: 'Star Wars Episode V:  The Empire Strikes Back',
    year: '1980'
  }
];


//generates a random number less than or equal to the quotes array length
//checks to see if the number has changed from the last number generated
//if the number did not change then a new number is generated
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

//Print the quote string concatenated with the required HTML
function printQuote() {
  let randomQuote = getRandomQuote();

  let html = ``;
  html += '<p class="quote">' + randomQuote.quote + '</p>';
  html += '<p class="source">' + randomQuote.source;
  if (randomQuote.citation) {
    html += '<span class="citation">' + randomQuote.citation + "</span>";
  }
  if (randomQuote.year) {
    html += '<span class="year">' + randomQuote.year + '</span>';
  }
  if (randomQuote.sourceInfo) {
    html += '<br>' + '<span class="sourceInfo">' + randomQuote.sourceInfo + '</span>';
  }
  html += "</p>";
  let myQuote = document.getElementById('quote-box');
  myQuote.innerHTML = html;
  return html;
}

//Randomly change the background color
//Code obtained without modification from http://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
//Available under public license ==> http://creativecommons.org/licenses/by-nc-sa/3.0/deed.en_US

function random_bg_color() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor);

  document.body.style.background = bgColor;
}

//timer for automatically loading a new quote and automatically changing the background
//color when the new quote is loaded
function timerQuotes() {
  random_bg_color();
  printQuote();
}

setInterval(timerQuotes, 20000);

document.getElementById('loadQuote').addEventListener("click", random_bg_color, false);


//When the button is clicked print a new quote from the quotes array.

document.getElementById('loadQuote').addEventListener("click", printQuote, false);