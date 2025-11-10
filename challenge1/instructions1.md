Santa Claus 🎅 ha recibido una lista de números mágicos que representan regalos 🎁, pero algunos de ellos están duplicados y deben ser eliminados para evitar confusiones. Además, los regalos deben ser ordenados en orden ascendente antes de entregárselos a los elfos.

Tu tarea es escribir una función que reciba una lista de números enteros (que pueden incluir duplicados) y devuelva una nueva lista sin duplicados, ordenada en orden ascendente.

```JavaScript
const gifts1 = [3, 1, 2, 3, 4, 2, 5];
console.log(prepareGifts(gifts1)); // [1, 2, 3, 4, 5]

const gifts2 = [6, 5, 5, 5, 5];
console.log(prepareGifts(gifts2)); // [5, 6]

console.log(prepareGifts([])); // []

prepareGifts(123); // "The function parameter is not an array"
```