"use strict";



//Arrow function
const slicer = fruit1 => fruit1 * 2; 

//Funtion Expression
const blender = function(fruit1, fruit2) {
  const slicedfruit1 = slicer(fruit1);
  const slicedfruit2 = slicer(fruit2);
  return `You now have ${slicedfruit1} apples and ${slicedfruit2} bananas in the blender.`; //Use backtick
}

const value = blender(4, 8);
console.log(value);

//Function Declaration
function printer(){
  console.log("Hello World!");
}

printer();

const calcAverage = (a,b,c) => (a+b+c) / 3;

const dolphins = calcAverage(85, 54, 41);
console.log(dolphins);
const koalas = calcAverage(23, 34, 27);
console.log(koalas);

const checkwinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win  (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koala win  (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
}

checkwinner(dolphins, koalas);