//task_2 exercise 5
interface DirectorInterface {
  workFromHome(): string;
  getToWork(): string;
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

  getToWork(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// console.log(createEmployee(200));
// console.log(createEmployee(1000));
// console.log(createEmployee("$500"));
/*
Type Predicate Syntax:
function isDirector(employee: Teacher | Director): employee is Director

This doesn't just return true or false — it tells TypeScript:
"If this function returns true, then treat employee as a Director inside the calling code."
 */

/*
❌ Regular boolean function (not a type predicate):
function isDirector(employee: Teacher | Director): boolean {
  return employee instanceof Director;
}

This does return true or false, 
but it doesn't help TypeScript narrow the type at compile time. 
You’d still have to cast manually.
 */
//Task 2 exercise 6
function isDirector(employee: Teacher | Director): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Teacher | Director): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

/*
executeWork(createEmployee(200));
executeWork(createEmployee(1000));
 */
//task_2 exercise 7
type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
  return todayClass === "Math" ? "Teaching Math" : "Teaching History";
}
console.log(teachClass("Math"));
console.log(teachClass("History"));
