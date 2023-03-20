const getJokeBtn = document.querySelector("#jokeBtn");
const showJoke = document.querySelector("#joke");

getJokeBtn.addEventListener("click", () => {
     generateJokes();
});

const generateJokes = async() => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '660ba65a34msh2f9f51daf034d74p13c9e2jsna3865594e00b',
            'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
        }
    };

   const getJoke = await fetch("https://dad-jokes.p.rapidapi.com/random/joke", options)
                   .then((response) => response.json())
                   .then((data) => data.body); 
                   
   const setup = getJoke[0].setup;
   const punchLine = getJoke[0].punchline;
   
    showJoke.innerHTML = setup + " " + punchLine;
   
}

generateJokes();