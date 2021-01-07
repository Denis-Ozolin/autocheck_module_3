// Задание
// Функция findMatches() принимает произвольное количество аргументов.
// Первым аргументом всегда будет массив чисел,
// а остальные аргументы будут просто числами.

// Дополни код функции так, чтобы она возвращала новый массив matches,
// в котором будут только те аргументы, начиная со второго,
// которые есть в массиве первого аргумента.

// Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив[1, 2],
// потому что только они есть в массиве первого аргумента.

// function findMatches() {
//   const matches = []; // Не изменяй эту строку
//   return matches;
// }

// Пиши код ниже этой строки
function findMatches(array, ...args) {
  const matches = []; // Не изменяй эту строку
    for (const arg of args) {
        if (array.includes(arg)) {
            matches.push(arg);
        }
    }
  // Пиши код выше этой строки
  return matches;
}

console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));

