interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // Optional property
  location: string;
  [propName: string]: any; // Allows additional properties
}

const teacher1: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "USA",
  age: 30, // Additional property
};

teacher1.yearsOfExperience = 5; // Optional property can be set
teacher1.location = "Canada"; // Location can be changed
console.log(teacher1);
