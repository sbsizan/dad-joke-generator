const btn = document.getElementById('btn-joke-generate');

const joke = document.getElementById('joke');


const apiKey = {
    method: 'GET',
    headers: { 'X-Api-Key': 'HXaqFTdEhN3etsLyG3FIdA==3N8eyETvFLPxDnFl'},
}
const getJoke = async () => {
        joke.innerText = 'Generating. . .'
        btn.disabled = true;
        btn.innerText = 'Loading. . .'
        const res = await fetch('https://api.api-ninjas.com/v1/dadjokes?limit=1', apiKey)
        const data = await res.json()

        btn.disabled = false;
        btn.innerText = 'Generate Joke';
    
        joke.innerText = data[0].joke
}

btn.addEventListener('click', getJoke);