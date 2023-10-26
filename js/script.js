/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/
let quotes = [

    {
        "quotes": "The world has never complained about how busy it is.",

        "source": "Haemin Sunim",

        "citation": "Book",

        "year": 2012
    },



    {
        "quotes": "The great moments of your life won't necessarily be the things you do, they'll also be the things that happens to you.",

        "source": "Ted Mosby",

        "citation": "Drama",

        "year": 2005
    },



    {
        "quotes": "Never be ashamed of trying. Effortlessness is a myth.",

        "source": "Taylor Swift",

        "citation": "Speech",

        "year": 2022
    },



    {
        "quotes": "It is only with the heart that one can see rightly; what is essential is invisible to the eye.",

        "source": "Antoine de Saint-Exupéry",

        "citation": "Book",

        "year": 1943
    },



    {
        "quotes": "Life moves pretty fast. If you don't stop and look around once in a while, you could miss it.",

        "source": "Ferris Bueller",

        "citation": "Movie",

        "year": 1986
    },

    {
        "quotes": "Dream don't work unless you do.",

        "source": "Ferris Bueller",

        "citation": "Movie",

        "year": 1986
    },



];


/***
 * `getRandomQuote` function
***/
// Create an array to store used quotes
var usedQuotes = []

function getRandomQuote(){
    if(usedQuotes === quotes.length){
        usedQuotes=[];
    }
    var randomNumber; 
    do{
        randomNumber = Math.floor(Math.random()* quotes.length);
    } while(usedQuotes.includes(randomNumber));
    //add index to usedQuotes array
    usedQuotes.push(randomNumber);
    return quotes[randomNumber];
}


/***
 * `printQuote` function
***/

function printQuote() {
    // 1. Create a variable that calls the getRandomQuote() function
    var newQuote = getRandomQuote();
    // 2. Create a variable that initiates your HTML string with
    // the first two <p></p> elements, their classNames,
    // and the quote and source properties, but leave off
    // the second closing `</p>` tag for now
    var pString = '<p class="quote">' + newQuote.quotes + '</p>' +
                    '<p class="source">' + newQuote.source;
    // 3. Use an if statement to check if the citation property
    // exists, and if it does, concatenate a <span></span>
    // element, appropriate className, and citation property
    // to the HTML string
    if(newQuote.citation){
        pString += '<span class = "citation">' + newQuote.citation +'</span>';
    }
    // 4. Use an if statement to check of the year property exists,
    // and if it does, concatenate a <span></span> element,
    // appropriate className, and year property to the HTML
    //string
    if(newQuote.year){
        pString += '<span class = "year">' + newQuote.year + '</span>';
    }
    // 5. After the two if statements, concatenate the closing </p>
    // tag to the HTML string
    pString += '</p>';
    // 6. set the innerHTML of the quote-box div to equal the
    // complete HTML string
    document.getElementById('quote-box').innerHTML = pString;
}


/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

document.getElementById('load-quote').addEventListener('click',printQuote);