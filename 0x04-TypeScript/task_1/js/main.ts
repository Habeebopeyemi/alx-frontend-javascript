interface Teacher {
  readonly firstName: string; //modifiable only during initialization
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

//interface Directors that extends Teacher
interface Director extends Teacher {
  numberOfReports: number;
}
const director1: Director = {
  firstName: "Jane",
  lastName: "Smith",
  fullTimeEmployee: true,
  location: "UK",
  numberOfReports: 5,
};

console.log(director1);
