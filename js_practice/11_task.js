let library = {
    libraryName: "Downtown Public Library",
    books: [
        {
            title: "JavaScript Essentials",
            genre: "Programming",
            authors: [
                { name: "Alice Johnson", email: "alice@example.com" },
                { name: "Bob Smith", email: "bob@example.com" }
            ],
            publisher: {
                name: "Tech Books Publishing",
                location: "San Francisco, CA"
            }
        },
        {
            title: "Learning HTML & CSS",
            genre: "Web Development",
            authors: [
                { name: "Carol White", email: "carol@example.com" },
                { name: "David Brown", email: "david@example.com" }
            ],
            publisher: {
                name: "Web World Publishers",
                location: "New York, NY"
            }
        }
    ]
};

// 1. Access the name of the second book's publisher.
console.log(library.books[1].authors[0].name)
console.log(library.books[1].authors[1].name)


// 2. Access the email address of the first author of the first book.
console.log(library.books[0].authors[1].email)