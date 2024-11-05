let data = {
    Jessica: {  
        id: 33,
        study: [
            {
                primary: [
                    { school_name: "Lincoln Elementary School" },  
                    { location: "New York, NY" } 
                ]
            },
            {
                secondary: [
                    { school_name: "Central High School" },
                    { location: "Los Angeles, CA" }  
                ]
            }
        ]
    }
};

// Accessing secondary school location

console.log(data.Jessica.study[1].secondary[1].location); 

