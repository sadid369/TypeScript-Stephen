// const today = new Date();
// console.log(today.getDay());

// const person = {
//   age: 20,
// };

// class Colour {}
// const red = new Colour();

let apple: number = 5;
let orange = "or ";

let pointer: { x: number; y: number } = {
  x: 9,
  y: 7,
};

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
logNumber(4);

const carMakers: string[] = ["ford", "toyota", "chevy"];
const dates: Date[] = [new Date(), new Date()];

carMakers.map((car: string): string => {
  return car;
});

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number];
const pepsi: Drink = ["brown", true, 40];
