

// calculateMoney()

// ticket = 120 

// daroyan=500

// staff= 50*8;

// if negetive number --



function calculateMoney(numTicket){

    if (numTicket < 0){
        return "Invalid Number";
    }

    else{
         let ticketPrice=120;
        let gurd=500;
         let staff=400;

        let earn=numTicket * ticketPrice;
        let libilities= 900;
        let profit=earn -libilities;
        return profit;


    }

    
}

let output = calculateMoney(-130);

console.log(output);