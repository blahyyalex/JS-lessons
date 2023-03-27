class Worker {
    constructor(fullName, dayRate, workingDays) {
        this._fullName = fullName;
        this._dayRate = dayRate;
        this._workingDays = workingDays;
        this._experience = 1.2;
    }

    get fullName() {
        return this._fullName;
    }

    set fullName(value) {
        this._fullName = value;
    }

    get dayRate() {
        return this._dayRate;
    }

    set dayRate(value) {
        this._dayRate = value;
    }

    get workingDays() {
        return this._workingDays;
    }

    set workingDays(value) {
        this._workingDays = value;
    }

    get showExp() {
        return this._experience;
    }

    set setExp(value) {
        this._experience = value;
    }

    showSalary() {
        console.log(`${this.fullName} salary: ${this.dayRate * this.workingDays}`);
    }

    showSalaryWithExperience() {
        console.log(`${this.fullName} salary: ${this.dayRate * this.workingDays * this._experience}`);
    }
}

let worker1 = new Worker("John Johnson", 20, 23);
worker1.showSalary();
console.log(`New experience: ${worker1.showExp}`);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log(`New experience: ${worker1.showExp}`);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Tomson", 48, 22);
worker2.showSalaryWithExperience();

let worker3 = new Worker("Andy Ander", 29, 23);
worker3.showSalaryWithExperience();

let workers = [worker1, worker2, worker3];

// Сортування за зарплатою з найбільшим experience по зростанню
workers.sort((a, b) => (a.dayRate * a.workingDays * a.showExp) - (b.dayRate * b.workingDays * b.showExp));
console.log("Sorted salary:");
workers.forEach(worker => console.log(`${worker.fullName}: ${worker.dayRate * worker.workingDays * worker.showExp}`));
