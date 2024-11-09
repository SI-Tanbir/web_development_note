// The function tellJoke() below logs a funny message every 2 seconds and after 10 seconds, it stops. Complete the code below and see the output.

    function tellJoke() {
     console.log(`Why don't scientists trust atoms? Because they make up
     everything!`);
    }

    const jokeInterval = setInterval(tellJoke,2000);

    // After 10 seconds, stop telling jokes

    setTimeout(() => {


     //write code
     clearInterval(jokeInterval);
     console.log("Thats  enough jokes for now ");

    }, 10000);