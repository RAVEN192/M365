//alert("SHEESH") //Alert function

/*let firstname = "Raven";
let lastname = "Tejada";
let age = 12;

//let, var, const - used to declare variables (Var is old version)

let fullname = firstname +" "+ lastname + ' and I am ' +  age  + ' years old.';
console.log(fullname);

fullname = `${firstname} ${lastname} and I am ${age} years old.`; //Backtick technique
console.log(typeof fullname); //typeof funstion to know what variable type

let driverlicense = false;
console.log(driverlicense);
console.log(typeof driverlicense);

if(driverlicense){
  console.log("I have a driver's license");
} else {
  console.log("I don't have any driver's license");
}

//&, || = and, or

//ternary operator
let drink = age >=18 ? 'wine' : 'water';
console.log(`I can drink ${drink}`);

//conversion
let years = '2001';
console.log(typeof Number(years));
console.log(Number(years) + 10);

//Coercion
console.log('23' + 2 - 2);

//Conversion
let integer = 2021;
console.log(String(integer) - 10);

//Prompt
let ans = prompt('What is your age?');
console.log(Number(ans)+10);



let bill = 350;

let tip = bill >= 50 && bill <=300 ? 0.15:0.20;
let total = bill + tip;
console.log(`The bill was ${bill}, the tip is ${tip}, and the total value is ${total}`);

let day = 'wednesday';
switch(day){
  case 'monday':
    console.log('Today is monday')
    break;
  case 'tuesday':
    console.log('today is tuesday')
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Today is wednesday or thursday')
    break;
  default:
    console.log('Today is not a weekday')
}
*/


let ordervalue = 50;

let deliveryfee = ordervalue <  50 ? 10 :
                  ordervalue >= 50 && ordervalue <=150 ? 5 : 0;
                  
  
console.log(`The order value was ${ordervalue}, the delivery fee was ${deliveryfee}, and the total value is ${ordervalue + deliveryfee}.`);

let age = 15;

let drink = age == 18 ? 'wine':
            age == 19 ? 'milk':
            age >= 21 ? 'beer': "water";

console.log(`I can drink ${drink}`);

let num1 = prompt('Enter a number:');
console.log(Number(num1));

let num2 = prompt('Enter a second number:');
console.log(Number(num2));

let operation = prompt(`Select an operator:
1 for Addition
2 fot Subtraction
3 for Multiplication
4 for Division`);

const addition = (num1,num2) => num1 + num2; 
const sum = addition(Number(num1),Number(num2));

const Subtraction = (num1,num2) => num1 - num2; 
const sub = Subtraction(Number(num1),Number(num2));

const Multiplication = (num1,num2) => num1 * num2; 
const mul = Multiplication(Number(num1),Number(num2));

const Division = (num1,num2) => num1 / num2; 
const div = Division(Number(num1),Number(num2));
/*
switch(operation){
  case '1':
    alert(`The sum of the two numbers are: ${sum}`)
    break;
  case '2':
    alert(`The difference of the two numbers are: ${sub} `)
    break;
  case '3':
    alert(`The product of the two numbers are: ${mul} `)
    break;
  case '4':
    alert(`The quotient of the two numbers are: ${div} `)
    break;
}
*/

/*
if(operation == '1'){
  alert(`The sum of the two numbers are: ${sum}`);
} else if (operation == '2'){
  alert(`The difference of the two numbers are: ${sub}`);
} else if (operation == '3'){
  alert(`The product of the two numbers are: ${mul}`);
} else if (operation == '4'){
  alert(`The quotient of the two numbers are: ${div}`);
} else {
  alert(`This is not an operator`)
}
*/

let result = operation == '1' ? `The sum of the two numbers are: ${sum}`:
             operation == '2' ? `The difference of the two numbers are: ${sub}`:
             operation == '3' ? `The product of the two numbers are: ${mul}`:
             operation == '4' ? `The quotient of the two numbers are: ${div}`: "This is not an operator";

             alert(result);






