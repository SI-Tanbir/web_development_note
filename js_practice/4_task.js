// write an arrow function where it will do the following :
 
//  1. it will take an array where the array Element will be the name of your friends

//  2. check if the length of each element is even ,push elements with even length to a new array and return the result


let friends=['salman','tanvir','israfil','koushik','khalek'];
let even=[];
for(let i of friends){
    if(Number(i.length) % 2==0){
        even.push(i);
    } 

}
console.log(even)