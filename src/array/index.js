/*
Все задачи по темам
https://learn.javascript.ru/array
https://learn.javascript.ru/array-methods
 */

/**
 *  Создать и вернуть новый пустой массив массив
 */
function createArray() {
return [];
}

/**
 * Создать и вернуть массив указанной длинны
 */
function createEmptyArrayWithLength(len) {
let arr = [];
arr.length = len;
return arr;
}

/**
 * Добавить новое значение в конец существующего массива
 * Вернуть измененный массив
 */
function addToArray(arr, newValue) {
arr.push(newValue);
return arr;
}

/**
 * Добавить новое значение в начало существующего массива
 * Вернуть измененный массив
 */
function addToStartArray(arr, newValue) {
arr.unshift(newValue);
return arr;
}

/**
 *  Удалить из массива первый элемент
 *  Венруть массив, где первый элемент это измененный массив,
 *  второй - удаленный элемент массива
 */
function removeFromArrayFirst(arr) {
let arr1 = []
arr1[1] = arr.shift()
arr1[0] = arr
return arr1;
}

/**
 * Соеденить элементы массива в строку
 *  в качестве соединителя использовать параметр sep
 *  венуть строку. Обход массива делать с помощью цикла for (let i=0; i<arr.length; i++)
 *  пример joinArray(['name', 'age'], "+") => 'name+age'
 */
function joinArray(array, sep) {
  let arr1 = '';

    for (let i=0; i<array.length; i++) {
      if (i < array.length - 1)
      {arr1 += array[i] + sep;} else {arr1 += array[i];}
    }
    return arr1;
}

/**
 * Создать и вернуть копию массива
 * @param arr
 * @returns {*[]}
 */
function copyArray(arr) {
arr2 = []
arr2 = arr.slice()
return arr2
}

/**
 * Объеденеить 2 массива в 1 новый и вернуть его
 * @param arr
 * @param arr2
 * @returns {any[] | string}
 */
function mergeArray(arr, arr2) {
arr3 = []
arr3 = arr.concat(arr2)
return arr3
}

/**
 * Отфильтровать массив, вернув новый массив, где все элементы больше 2
 *  использовать функцию filter https://learn.javascript.ru/array-methods#filter
 * filterArray([1,3, 5, 2]) => [3,5]
 */
function filterArray(arr) {
let f = arr.filter(item => item > 2)
return f
}

/**
 * Посмотреть как работает функция  filter https://learn.javascript.ru/array-methods#filter
 * Отфильтровать массив не использую функцию filter
 * Вернуть новый массив, к котором для всех элементов функция fn возвращает true
 * Шаги
 *  1. пройти в цикле по всем элементам массива
 *  2. Для каждого элемента вызвать функцию fn
 *  3. Если функция вернула true - включить текущий элемент в результат
 * @param arr
 * @param fn
 */
function filterArrayCustom(arr, fn) {
  let arr2 = [];
  let i=0;
  for(let item of arr) {
    if (fn(item)) {
      arr2[i++] = item;
    }
  }
  return arr2;
}

/**
 * Развернуть массив.
 * Вернуть новый массив.
 */
function reverseArray(arr) {
  let arr2=[]
  arr2 = arr.concat()
  arr2.reverse()
  return arr2
}

/**
 * Отсортировать массив по убыванию свойства age
 * вернуть новый массив
 * массив элементов [ { name: 'Max', age: 1 }, { name: 'Max', age: 2 } ]
 * @param arr
 */
function sortArray(arr) {

  let arr2=[]
  arr2 = arr.concat()
  arr2.sort((obj1, obj2) => obj2.age - obj1.age)
  return arr2
}

/**
 * Параметр arr - массив из 9ти элементов
 * Создать и вернуть новый массив длинной 3.
 * Первый элемент нового массима - массив из последних 3ех элементов массива arr
 * Второй элемент массива - массив из элементов с 4ого по 6ой массива arr
 * Третий элемент - массив из первый 3эъ элементов массива arr
 *
 * Использовать функцию slice
 *
 * Пример
 *  spliceArray([1,2,3,4,5,6,7,8,9]) -> [ [7, 8, 9], [4, 5, 6], [1, 2, 3] ]
 */
function spliceArray(arr) {
  let arr2=[]
  let a = arr.length - 3
      u = arr.length
      for (let i=0; i < 3; i++) 
      {
        arr2[i] = arr.slice(a,u)
        a-=3;
        u-=3;
      }
      return arr2;
}

/**
 * Перевести объект в массив
 * Создать и вернуть массив массивов.
 * Каждый новый массив состоит их двух элементов. 1ый - ключ объекта, 2 - значние ключа объекта
 *
 * Пример
 * objectToArray({ name: 'Max',  age: 22, city: 'FR' })
 *  => [ [ 'name', 'Max' ], ['age' , '22'], [ 'city', 'FR' ] ]
 * @param obj
 */
function objectToArray(obj) {
  
}

/**
 * Перевести массив в объект
 * обратно функции objectToArray
 * @param arr
 */
function arrayToObject(arr) {

}

module.exports = {
  createArray,
  createEmptyArrayWithLength,
  addToArray,
  addToStartArray,
  removeFromArrayFirst,
  joinArray,
  copyArray,
  mergeArray,
  filterArray,
  filterArrayCustom,
  reverseArray,
  sortArray,
  spliceArray,
  objectToArray,
  arrayToObject,
};
