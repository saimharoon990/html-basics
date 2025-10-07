prompt("What is your name?")
prompt("What is their name?")

var lovescore = Math.random() * 100;
lovescore = Math.floor(lovescore) + 1;
if (lovescore > 70) {
    alert("Your lovescore is " + lovescore + "%" + "You love eachother like kanye loves kanye")
}
if (lovescore > 30 && lovescore <= 70); {
    alert("Your love score is " + lovescore + "%")
}
if (lovescore <= 30) {
    alert("Your lovescore is " + lovescore + "%" + "you go together like oil and water");
}
var output = [];
var count = 1;

function fizzBuzz() {

    while (count <= 100) {

        if (count % 3 === 0 && count % 5 === 0) {
            output.push("fizzBuzz");
        } else if (count % 3 === 0) {
            output.push("Fizz");
        } else if (count % 5 === 0) {
            output.push("Buzz");
        } else {
            output.push(count);
        }
        count++;
    }
    console.log(output);
}