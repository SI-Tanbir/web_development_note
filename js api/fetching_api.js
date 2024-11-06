function userData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data => displayUser(data))
    

}

function displayUser(info){

    let ul=document.getElementById('user-list');
    
    for(let i of info){
        console.log(i.name);
        let li=document.createElement('li');
        li.innerText=i.name;
        ul.appendChild(li);

        li.addEventListener('click',function(){
            ul.removeChild(li);
        })


    }
} 

