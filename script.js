
// Module 19 - What is Accumulator Pattern
let colors = [" red", " white", " blue"];
let statement = "My favorite colors are ";


// console.log(colors );
console.log(statement + colors);
console.log(statement , colors[0],  colors[1] ,' and', colors[2]);


// number 2
// loop through each item
// check if the person is attending
// if they are attending, say they are partying
// otherwise, say they are burnt out

let partyPeople = [
    { name: "Joe", attending: false },
    { name: "Jasmine", attending: true },
    { name: "Julio", attending: false },
    { name: "Julia", attending: true },
];
let party = 0;

for (let i = 0; i < partyPeople.length; i++) {
    party = partyPeople[i];
    // console.log(party);
    if (party.attending === false) {
        console.log(party.name, 'is burnt out');
    } else {
        console.log(party.name, 'is partying');
    }
}


// Functions and Loops

// number3

let goalsScored = [0, 1, 3, 0, 5, 4, 2, 0, 1];
totalGoals(goalsScored) //=> 3
function totalGoals() {
    let totalGoals = 0;
    for (let i = 0; i < goalsScored.length; i++) {
        totalGoals = totalGoals + goalsScored[i];
    }
    console.log("The team scored " + totalGoals + " goals this season.");
}