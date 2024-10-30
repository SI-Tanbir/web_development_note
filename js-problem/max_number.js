
// let x =90;
// let y =70;

// let z =80

function maxNumber(x,y,z){


    if (x >y && x>z){
        return console.log(`${x} is bigger`)
    }
    else if (y>x && y >z){
        return console.log(`${y} is bigger`)
    }

    else{
        return console.log(`${z} is bigger`)
    }


}

maxNumber(70,100,300)