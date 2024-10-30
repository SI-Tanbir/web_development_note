

number =[3,4,65,3,4,78,4,5,7,2,4,3];

let unique=[];

for( let i of number){

    if(unique.includes(i) === false){
        unique.push(i);
    }

}

console.log(unique);
