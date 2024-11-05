// 🚀 JavaScript Challenge: Email Generator
// Given an array of employee data, create standardized company email addresses 
// and format their departments.

// const employees = [
//     { firstName: "John", lastName: "Doe", department: "IT-DEPARTMENT" },
//     { firstName: "Jane", lastName: "Smith", department: "SALES" },
//     { firstName: "Mike", lastName: "Wilson", department: "Hr" }
//   ];
  
  // Requirements:
  // 1. Create email: firstName.lastName@company.com (all lowercase)
  // 2. Format department name to be Title Case (first letter uppercase, rest lowercase)
  // 3. Add an employeeId: first letter of firstName + first letter of lastName + random 3 digits
  
  // Expected Output:
  // [
  //   {
  //     firstName: "John",
  //     lastName: "Doe",
  //     department: "It-Department",
  //     email: "john.doe@company.com",
  //     employeeId: "JD847"
  //   },
  //   ...
  // ]
  
  // 💡 Your solution here:
//   console.log(employees[0].department.slice(1).toLocaleLowerCase())



const employees = [
    { firstName: "John", lastName: "Doe", department: "IT-DEPARTMENT" },
    { firstName: "Jane", lastName: "Smith", department: "SALES" },
    { firstName: "Mike", lastName: "Wilson", department: "Hr" }
];


const formattedEmployees = employees.map(emp => ({
    firstName: emp.firstName,
    lastName: emp.lastName,
    department: emp.department.toLowerCase().replace(/(?:^|\s|-)\w/g, letter => letter.toUpperCase()),
    email: `${emp.firstName.toLowerCase()}.${emp.lastName.toLowerCase()}@company.com`,
    employeeId: `${emp.firstName[0]}${emp.lastName[0]}${Math.floor(Math.random() * 900) + 100}`
}));


console.log(formattedEmployees)

