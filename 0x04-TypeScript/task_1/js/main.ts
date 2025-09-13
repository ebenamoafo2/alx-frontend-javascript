
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// Directors interface that extends Teacher and requires numberOfReports
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example usage of Teacher interface
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Example usage of Directors interface
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Additional examples to demonstrate the interfaces
const teacher1: Teacher = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: 'New York',
  department: 'Mathematics',
  salary: 50000,
};

const teacher2: Teacher = {
  firstName: 'Bob',
  lastName: 'Johnson',
  fullTimeEmployee: false,
  location: 'California',
  hourlyRate: 25,
};

console.log('Teacher 1:', teacher1);
console.log('Teacher 2:', teacher2);

