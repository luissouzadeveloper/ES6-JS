// Spread Operator

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

// Junção dos dois arrays
const arr3 = [...arr1, ...arr2]

console.log(arr3);

const arr4 = [0, ...arr1, 4];
console.log(arr4)

// Junção de obj
const carNome = {nome: 'S10'}
const carMarca = {marca: 'Chevrolet'}
const carInfo = {km: 50000, preco: 22000}

const car = {...carNome, ...carMarca, ...carInfo}
console.log(car)