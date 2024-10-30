


num=[12,435,67,3,7,24,97,345,75622,4756,34];
odd=0;
 let odd_count=0;

function average(num){
for (let i=0;i <num.length ;i++){
    

    if(num[i] % 2 !=0){

        odd=odd+num[i];
        odd_count++;
    }

}

let outputAverage = odd / odd_count;

return console.log(outputAverage);

}

average(num);


