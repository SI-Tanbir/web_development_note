// Define the function 'world'
function world() {
    console.log("Inside world function");
}

// Pass 'world' as an argument to 'hello'
function hello(fun) {
    console.log(fun); // Logs the function definition of 'world'
    console.log('hello hello hello ', fun()); // Calls the function 'world' and logs its output
}

hello(world);

