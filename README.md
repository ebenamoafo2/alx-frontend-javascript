# Student Table Application

A TypeScript application that demonstrates interface usage and DOM manipulation by rendering student data in an HTML table.

## Features

- **TypeScript Interface**: Defines a `Student` interface with proper typing
- **Data Management**: Creates and manages an array of student objects
- **Dynamic Table Rendering**: Uses vanilla JavaScript to generate HTML tables
- **Clean Styling**: Applies basic CSS styling for table presentation

## Structure

### Student Interface
```typescript
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
```

### Functionality
- Creates two sample students with different data
- Stores students in a `studentsList` array
- Renders a table displaying:
  - First Name
  - Location

## Usage

1. Include the compiled JavaScript in an HTML file
2. The table will automatically render when the DOM loads
3. Each student appears as a row showing their first name and location

## Technologies Used

- **TypeScript**: For type safety and interface definitions
- **Vanilla JavaScript**: For DOM manipulation and table creation
- **HTML**: For document structure
- **CSS**: For basic table styling

## Getting Started

1. Compile the TypeScript file:
   ```bash
   tsc main.ts
   ```

2. Include the compiled JavaScript in your HTML file:
   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <title>Student Table</title>
   </head>
   <body>
       <script src="main.js"></script>
   </body>
   </html>
   ```

3. Open the HTML file in a web browser to see the rendered table

## Output

The application generates a table with the following structure:
- Header row with "First Name" and "Location" columns
- Data rows for each student in the array
- Basic border styling for clear visualization

