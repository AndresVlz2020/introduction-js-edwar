// Rest operator o spread operator
// Lo que se busca es NO NO NO modificar el arreglo original.

const months = ['December', 'Novemver', 'March'];
console.table(months);

// Se crea un nuevo arreglo y lo unimos con otro.

const newArray = [...months, 'January'];

// El nuevo arreglo se puede agregar al FINAL o al INICIO

const newArray2 = ['January', ...months];

newArray2.unshift('May');
newArray2.push('June');

// console.table(newArray);
console.table(newArray2);