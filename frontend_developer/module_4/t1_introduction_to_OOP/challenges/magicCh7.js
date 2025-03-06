const magic = (...numbers) => {
  const summa = numbers.reduce((acc, num) => {
    return acc + num;
  }, 0);
  const newMagic = (...rest) => magic(summa, ...rest);
  newMagic.valueOf = () => summa;
  return newMagic();
};

console.log(magic() == 0); // true
console.log(magic(5, 2, -8) == -1); // true
console.log(magic(1, 2)(3, 4, 5)(6)(7, 10) == 38); // true
console.log(magic(4, 8, 1, -1, -8)(3)(-3)(7, 2) == 13); // true
