function countStringInArray(array) {
  const text = array.join('').toString();
  let countObj = {};
  
  [...text].forEach((number) => {
    countObj[number] = [...text].filter(x => x == number).length;
  })

  return countObj
}

/*
const array = [112, 12, 311, 221, 233, 311];
countStringInArray(array) // { '1': 8, '2': 5, '3': 4 }
*/