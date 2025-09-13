// main.ts

interface Teacher {
  readonly firstName: string;     // only modifiable at initialization
  readonly lastName: string;      // only modifiable at initialization
  fullTimeEmployee: boolean;      // must always exist
  yearsOfExperience?: number;     // optional
  location: string;               // must always exist

  // Index signature to allow extra properties
  [key: string]: any;
}

// Example usage
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,  // extra property allowed
};

console.log(teacher3);
