// console.log("connection success")
function postfunction(){
    // console.log("click")
   fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res=>res.json())
   .then(data=>dataWork(data))

}
function dataWork(info){
let ul= document.getElementById('post-list');
    for(let i of  info){
        
        let li=document.createElement('li');
        li.innerHTML=`
        id:${i.id}; <br>

        title: ${i.title}; <br>

        body:${i.body};<br> <br><br>
        
        
        `;
        ul.appendChild(li);


    }



}