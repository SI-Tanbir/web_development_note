function checkName(name) {
    let lower = name.toLowerCase(); // Convert to lowercase
    console.log(lower);

    // Check for vowels in the lowercase name
    if (/[aeiou]/.test(lower)) {  // Regular expression to check for vowels
        console.log("bad name");   // Vowel found
    } else {
        console.log("good name");  // No vowels
    }
}

checkName("Sakil");  // Example input
