// look more into how I can integrate this file into App.js



const positiveQuotes = [
    "Be yourself; everyone else is already taken. - Oscar Wilde",
    "It is never too late to be what you might have been. - George Elliot",
    "If you cannot do great things, do small things in a great way. - Napoleon Hill",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Always do your best. What you plant now, you will harvest later. - Og Mandino",
    "Do one thing every day that scares you. - Eleanor Roosevelt",
    "Happiness often sneaks in through a door you didn't know you left open. - John Barrymore",
    "Keep your face towards the sunshine and shadows will fall behind you. - Walt Whitman",
    "A problem is a chance for you to do your best. - Duke Ellington",
    "Whether you think you can or you can't, you're right. - Henry Ford",
    "I'm not going to continue knocking that old door that doesn't open for me. I'm going to create my own door and walk through that. - Ava DuVernay", 
    "Take the time to enjoy the little things, for one day you may look back and realize they were the big things. - Robert Brault",
    "You may not control all the events that happen to you, but you can decide not to be reduced by them. - Maya Angelou",
    "It always seems impossible until it's done. - Nelson Mandela",
    "A person who never made a mistake never tried anything new. - Albert Einstein"
];
  
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * positiveQuotes.length);
    return positiveQuotes[randomIndex];
  }
  
  export default getRandomQuote;