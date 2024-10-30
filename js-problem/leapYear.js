

// to check where this year is leap year


function leapYear(year){

    if( year % 100 !=0 && year % 4 ==0){
        return console.log(`${year} is leap year`)
    }
    else if (year % 100 ==0 && year % 400 ==0){

        return console.log(`${year} is leap year`)

    }

    else{
        return console.log(`${year} is not leap year`)
    }


}

leapYear(2100);

