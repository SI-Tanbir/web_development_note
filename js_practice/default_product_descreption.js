// Write a function that takes product details and creates a description. If any parameter is missing, provide a default description

function product_des(name,price='unknown',category='General'){

    console.log(`Product name : ${name} , Price : ${price} , Category : ${category}`)


}

product_des('tooth brush','20$');