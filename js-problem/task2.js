// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];



const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

let small= heights2[0];

for (let i of heights2){

     
     if(i.length < small.length){

        small =i;

     }


}

console.log(small)