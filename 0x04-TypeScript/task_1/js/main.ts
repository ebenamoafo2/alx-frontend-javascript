interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [index: string]: any;
}


// Input 
const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };

console.log(teacher3);

// Output

// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"

interface Director extends Teacher {
    numberOfReports: number;
}


// Extending teachers class
const director1: Director = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };

console.log(director1);




// Interface for the function
interface printTeacherFunction {
  ({ firstName, lastName }: { firstName: string; lastName: string }): string;
}

// Explicit function implementation with destructuring
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
}

// Example
console.log(printTeacher({ firstName: "J", lastName: "Doe" })); // J. Doe




// Interface for the constructor parameters
interface StudentConstructorInterface {
  firstName: string;
  lastName: string;
}

// Interface for the StudentClass
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Your implementation with corrections:
class StudentClass implements StudentClassInterface {
    private firstName: string;
    private lastName: string;
    
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
     
    workOnHomework(): string {
        return "Currently working";
    }
     
    displayName(): string {
        return this.firstName;
    }
}

/