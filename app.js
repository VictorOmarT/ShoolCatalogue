class School {
    constructor(name, label, numberofStudents){

        this._name = name;
        this._label = label;
        this._numberofStudents = numberofStudents;
    }

    get name() { return this._name; }
    get label() { return this._label; }
    get number() { return this._number; }

    set numberofStudents(value) {
        value.isNaN() ? console.log('Invalid input: numberOfStudents must be set to a Number.'): this._numberofStudents = value;
    }

    quickFacts() {
        console.log(`${this._name} educates ${this._numberofStudents} students at the ${this.numberofStudents} school level.`);
    }

    static pickSubstitudeTeacher(substituteTeachers){
        const randomNum = Math.floor(Math.random() * substituteTeachers.length);
        return substituteTeachers[randomNum];
    }
}

class Primary extends School {

    constructor(name, numberOfStudents, pickupPolicy){
        super(name, 'Primary', numberOfStudents)
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy(){ return this._pickupPolicy; }
}

class HighSchool extends School {

    constructor(name, numberOfStudents, sportsTeams){
        super(name, 'High School', numberOfStudents)
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams(){
        return this._sportsTeams;
    }
}

const lorraineHansbury = new Primary('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.'
);

lorraineHansbury.quickFacts();

const sub = School.pickSubstitudeTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log (alSmith.sportsTeams)