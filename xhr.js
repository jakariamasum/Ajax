let button= document.getElementById('one');
let div= document.getElementsByTagName('div')[0]; 

button.addEventListener('click',()=>{
    let xhr= new XMLHttpRequest(); 
    console.log('xhr',xhr);

    xhr.open('GET','https://icanhazdadjoke.com');

    xhr.setRequestHeader('Accept','application/json');

    xhr.onreadystatechange=function(){
        console.log('readyState',xhr.readyState,' ','status',xhr.status )
        if(xhr.readyState===4 && xhr.status===200){
            console.log('responsetext',xhr.responseText);
            const jsonData= JSON.parse(xhr.responseText);
            console.log('jsonData',jsonData);
            div.innerText=jsonData.joke;
        }
    };

    xhr.send();
})