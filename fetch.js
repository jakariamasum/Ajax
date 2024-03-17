let button2= document.getElementById('two');
let div2= document.getElementsByTagName('div')[0]; 

button2.addEventListener('click',()=>{
    fetch('https://icanhazdadjoke.com',{
        headers: {
            "Accept": 'application/json'
        }
    })
    .then(response=>{
        console.log(response)
        return response.json();

    })
    .then(result=>{
        console.log(result.joke.toUpperCase())
        div2.innerText=result.joke;
    })
    .catch(e=>{
        console.log('error',e)
    })
})