const numbers = [0, 5, 8, 9, 5, 8, 79, 120];

// Agregar elementos a mi arreglo, pero con este método se requiere conocer la longitud del arreglo

// numbersLenght = numbers.length
// console.log(numbersLenght)

// numbers[numbersLenght] = 100;

// console.log(numbers);

// Con el método push se agregan elementos al final del arreglo

// numbers.push(700, 800);

// console.log(numbers);

// console.table(numbers);

// Método unshift para agrega elementos al inicio de mi arreglo

numbers.unshift(-3, -2, -1);

// Método pop para eliminar el último elemento del arreglo

numbers.pop();

// Método shift para eliminar el primer elemento de mi arreglo
numbers.shift();

// Método splice elimina todos los elementos a partir del índice asignado

numbers.splice(5);
numbers.splice(numbers, 0);
console.table(numbers);