// Los booleanos tienen 2 valores, falso y verdadero 

let age = 42;
// Mayor que 
let isOlderThan = age >= 18;

console.log(isOlderThan);

// ===============================
let userName = "Miguel";
let haveName = userName !==  "";

console.log(haveName)

// =============================
// En js 0 es falsy pero cualquier  numero distinto de cero es truthy.
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(10));
console.log(Boolean(-5));
console.log(typeof Boolean(-5));

// ==============================
// En js null o undefined siempre se convierten en false.
let nullValue = null;
let undefinedValue;

console.log(Boolean(nullValue));
console.log(Boolean(undefinedValue));
// ==============================
// Los booleanos son la base de las decisiones en los programas.
let haveAccess = true; 
if (haveAccess){
    console.log("Welcom to system");} 

else{
    console.log("Denied access");}