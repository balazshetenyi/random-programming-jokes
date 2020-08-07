const setupDiv = document.getElementById('setup')
const punchlinDiv = document.getElementById('punchline')
const punchlineBtn = document.getElementById('punchlineBtn')
const newJokeBtn = document.getElementById('newJokeBtn')

let punchline;

async function getJoke() {
    const jokePromise = await fetch('https://official-joke-api.appspot.com/jokes/programming/random')
    const joke = await jokePromise.json()
    
    setupDiv.textContent = joke[0].setup
    punchline = joke[0].punchline

    punchlinDiv.textContent = ''
    punchlinDiv.classList.remove('bubble')

    punchlineBtn.classList.toggle('hidden')
    newJokeBtn.classList.toggle('hidden')
}

function getPunchline() {
    //Reveal text
    punchlinDiv.textContent = punchline
    punchlinDiv.classList.add('bubble')
    // Swap buttons
    punchlineBtn.classList.toggle('hidden')
    newJokeBtn.classList.toggle('hidden')
}

punchlineBtn.addEventListener('click', getPunchline)

newJokeBtn.addEventListener('click', getJoke)

getJoke()