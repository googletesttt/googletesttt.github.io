const qoutes = [
    {
        quote: "Let no one ever come to you without leaving better and happier.",
        author: "Mother Teresa",
    },
    {
        quote: "A friend should bear his friend's infirmities.",
        author: "William Shakespeare",
    },
    {
        quote: "People find life entirely too time-consuming.",
        author: "Stanislaw J. Lec",
    },
    {
        quote: "Human beings have an inalienable right to invent themselves.",
        author: "Germaine Greer",
    },
    {
        quote: "To love and be loved is to feel the sun from both sides.",
        author: "David Viscott",
    },
    {
        quote: "Travel is only glamorous in retrospect.",
        author: "Paul Theroux",
    },
    {
        quote: "You create your opportunities by asking for them.",
        author: "Patty Hansen",
    },
    {
        quote: "You can cover a great deal of country in books.",
        author: "Andrew Lang",
    },
    {
        quote: "I never think of the future - it comes soon enough.",
        author: "Albert Einstein",
    },
    {
        quote: "Paradise is where I am.",
        author: "Voltaire",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//Math.random() : 0Math.floor() : 소수점 첫째자리에서 내림
//Math.ceil(): 소수점 첫째자리에서 올림
//Math.round(): 반올림

const todaysQuote = qoutes[Math.floor(Math.random() * qoutes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;