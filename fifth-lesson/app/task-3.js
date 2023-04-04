class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    showFullName() {
        console.log(this.name + " " + this.surname);
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    showFullName(midleName) {
        console.log(this.surname + " " + this.name + " " + midleName);
    }

    showCourse() {
        const currentYear = new Date().getFullYear();
        const course = currentYear - this.year + 1;
        return course >= 1 && course <= 6 ? course : "Invalid course";
    }
}


const stud1 = new Student("Petro", "Petrenko", 2019);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 4