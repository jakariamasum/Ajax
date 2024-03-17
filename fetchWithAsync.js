let button3= document.getElementById('three');
let div3= document.getElementsByTagName('div')[0]; 

button3.addEventListener('click',displayJoke);

async function displayJoke() {
    const response= await fetch('https://icanhazdadjoke.com',{
        headers:{
            'Accept':'application/json'
        }
    });

    const jokeObject= await response.json();
    console.log(jokeObject,' ',jokeObject.joke);
    const jokes= jokeObject.joke.toUpperCase();
    console.log(jokes);
    div3.innerHTML=jokes;
}