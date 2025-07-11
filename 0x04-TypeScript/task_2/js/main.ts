interface Teacher {
  readonly firstName: string; //modifiable only during initialization
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // Optional property
  location: string;
  [propName: string]: any; // Allows additional properties
}

// const teacher1: Teacher = {
//   firstName: "John",
//   lastName: "Doe",
//   fullTimeEmployee: true,
//   location: "USA",
//   age: 30, // Additional property
// };

//interface Directors that extends Teacher
interface Director extends Teacher {
  numberOfReports: number;
}
// const director1: Director = {
//   firstName: "Jane",
//   lastName: "Smith",
//   fullTimeEmployee: true,
//   location: "UK",
//   numberOfReports: 5,
// };

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Function to create a class constructor
interface IStudent {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}
interface IStudentConstructor {
  new (firstName: string, lastName: string): IStudent;
}
class StudentClass implements IStudent {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }
  displayName(): string {
    return `${this.firstName}`;
  }
}

const student1: IStudent = new StudentClass("Alice", "Johnson");

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workTeacherTasks(): string {
    return "Getting to work on teacher tasks";
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee("$500"));
