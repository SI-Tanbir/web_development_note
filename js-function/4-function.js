// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.




binaryString=[0,1,0,0,1,0,1,0,0,0];
count=0;

function count_zero(binaryString){




    for(let i=0;i < binaryString.length;i++){


    if(binaryString[i] ==0){
        count++;

    }
    else{

    }


}

return count;

};


let output =count_zero(binaryString);

console.log(output);