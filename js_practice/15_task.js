// Write an async/await function that fetch data from an api and logs a message.
// Input:
// https://v2.jokeapi.dev/joke/Programming?type=single

async function datamine() {

    let res= await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
    let data = await res.json();
    console.log(data)
    
}



datamine()
// Note: you can use an api of your choice
// Output:
// Two SQL tables sit at the bar. A query approaches and asks "Can I join you?"


// Note: output may change according to the api you used

