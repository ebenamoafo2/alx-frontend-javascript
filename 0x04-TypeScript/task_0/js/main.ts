// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "California"
};

// Create the studentsList array
const studentsList: Student[] = [student1, student2];

// Render the table using Vanilla JavaScript
function renderStudentsTable(): void {
  // Create table element
  const table = document.createElement('table');
  table.style.border = '1px solid black';
  table.style.borderCollapse = 'collapse';
  
  // Create table header
  const headerRow = document.createElement('tr');
  
  const firstNameHeader = document.createElement('th');
  firstNameHeader.textContent = 'First Name';
  firstNameHeader.style.border = '1px solid black';
  firstNameHeader.style.padding = '8px';
  
  const locationHeader = document.createElement('th');
  locationHeader.textContent = 'Location';
  locationHeader.style.border = '1px solid black';
  locationHeader.style.padding = '8px';
  
  headerRow.appendChild(firstNameHeader);
  headerRow.appendChild(locationHeader);
  table.appendChild(headerRow);
  
  // Iterate through studentsList and create rows
  studentsList.forEach((student: Student) => {
    const row = document.createElement('tr');
    
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    firstNameCell.style.border = '1px solid black';
    firstNameCell.style.padding = '8px';
    
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    locationCell.style.border = '1px solid black';
    locationCell.style.padding = '8px';
    
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
  });
  
  // Append table to the document body
  document.body.appendChild(table);
}

// Execute the function when DOM is loaded
document.addEventListener('DOMContentLoaded', renderStudentsTable);