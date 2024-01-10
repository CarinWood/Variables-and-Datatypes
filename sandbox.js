
/* Exercise 1 */

let age = 38
console.log("this is my age: " + age)

/* Exercise 2 */

let forname = "Carin"; //det moderna sättet att deklarera en variabel
var haircolor = "blonde"; //det äldre sättet att deklarera en variabel. Lever över alla scoop
const city = 'Gothenburg' //Kan ej skrivas över/ändras

console.log('My name is ' + forname + ". My haircolor is " + haircolor + " and I live in " + city);

/* Exercise 3 */

let animal = "dog";
let animalAge = 3;
let chipped = true;

console.log("animal: " + animal)
console.log("age: " + animalAge)
console.log("chipped: " + chipped)

/* Exercise 4 */
const name = 'Pluto'
console.log(name)
// name = "Mickey";
// console.log(name) --> typfel. Det går inte att assigna någonting nytt till en konstant.
//Antingen får man göra om den till let eller deklarera om den där den initieras.

/* Exercise 5 */

let isOrderPayed = true;
if(isOrderPayed) {
    console.log("Ship the custormer's order")
} else {
    console.log("Wait for payment")
}

/* Ett bra användningsområde för booleans är när man vill kolla om något är sant för att då utföra
en viss sak. Är det falskt kanske en annan sak ska utföras */

/* Exercise 6 */

/* Om man från början vet att värdet aldrig kommer att ändras ska man använda const. När man använder const
kan värdet inte ändras eller skrivas över av misstag */

/* Exercise 7 */

let number1 = 23
let number2 = 42
let res = number1 + number2
console.log(res)

/* Exercise 8 */

let result1 = number1 - number2
let result2 =  number1 * number2
let result3 = number1 / number2

console.log(result1, result2, result3)

/* Exercise 9 */

let a = 53  
console.log(a)
a += 5
console.log(a)

/* Exercise 10 */

/* Det som händer på de två första raderna är irrelevant då a assignas till värdet 7 på tredje raden.
Sedan adderas 2 till det befintliga värdet 7. Console loggen kommer då att visa 9. */

// let a = 10; a assignas till 10
// a = a - 4; a subtraheras med 4. Värdet är nu 6
// a = 7; a assignas till 7. Värdet är nu 7
// a = a + 2; 7 ökas med 2. Värdet är nu 9

// console.log(a); Detta kommer att loggas som 9