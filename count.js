const array = [112, 14, 311, 241, 233, 511, 1543, 1115, 4114, 14];
const text = array.join('').toString();
let myObj = {};

[...text].forEach((number) => {
  myObj[number] = [...text].filter(x => x == number).length;
})

console.log(myObj);
/*
  { 
    '1': 15, 
    '2': 3, 
    '3': 4, 
    '4': 6, 
    '5': 3 
  } 
*/