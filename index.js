// // //TASK 1
// // // Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4)(5)(), вернет массив переданных в параметры чисел.
function func(el_0) {
    return function el_1 (el_1){
      return function el_2 (el_2){
        return function el_3(el_3){
          return function creatArr(arr=[]){
            arr.push(el_0,el_1,el_2,el_3);
            console.log (arr);
          };
        };
      };
    };
};
func(2)(3)(4)(5)();



// // // TASK 2
// // // Пусть функция в замыкании хранит число 10. Сделайте так, чтобы каждый вызов функции
// // // уменьшал это число на 1 и выводил на экран уменьшенное число.
function num() {
    let num = 10;
    return function decrement() {
        return num = --num;
    };
};
let a = num();
console.log(a());



// // // TASK 3
// // // Модифицируйте предыдущую задачу так, чтобы отсчет доходил до 0, а затем каждый 
// // // последующий вызов функции выводил на экран сообщение о том, что отсчет окончен.
function num_TASK_3() {
    let num = 10;
    return function decrement() {
        if (num === 0) {
            return 'ОТСЧЁТ ОКОНЧЕН!';
        };
        return num = --num;
    };
};
let b = num_TASK_3();
console.log(b());



// // TASK 4
// // Дан многомерный объект произвольного уровня вложенности, например, такой:
// // {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
// // С помощью рекурсии выведите все примитивные элементы этого объекта на экран.
function recursion(obj) {
    for (let key in obj){
      if (typeof(obj[key])==='object'){
        recursion(obj[key]);
      } else {
          console.log(obj[key]);
        };
    };
};
recursion({
    a: 1,
    b: { c: 2, d: 3, e: 4 },
    f: {
        g: 5, j: 6, k: {
            l: 7,
            m: {
                n: 8,
                o: 9
            }
        }
    }
});



// TASK 5
// Дан многомерный объект произвольного уровня вложенности, например, такой:
// {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
// С помощью рекурсии найдите сумму элементов этого объекта.
let sumElem = 0;
function recurs(obj) {
  for (let key in obj){
    if (typeof(obj[key])=='object'){
      recurs(obj[key]);
    } else {
        sumElem += obj[key];
      };
    };
    return sumElem;
};
console.log(recurs({
    a: 1,
    b: { c: 2, d: 3, e: 4 },
    f: {
        g: 5, j: 6, k: {
            l: 7,
            m: {
                n: 8,
                o: 9
            }
        }
    }
}));
  


// TASK 6
// Дан многомерный массив произвольного уровня вложенности, содержащий внутри себя строки, например, такой:
// ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]]
// С помощью рекурсии слейте элементы этого массива в одну строку:
// 'abcdefgjk'
let str = '';
function array (arr){
  for(let elem of arr){
    if (typeof(elem)==='object'){
        array(elem);
    }else{
        str += elem;
      };
    };
    return str;
};
console.log(array(['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]]));



// TASK 7
// - Написать функцию, которая будет возвращать количество вызовов этой функции в квадрате. (Использовать замыкание)
function back(){
    let numCall = 0;
    return function () {
        console.log((++numCall) ** 2);
    };
};
let callFunc = back();
callFunc();
callFunc();
callFunc();



// TASK 8
// Создайте замыкание: функция makePassword получает пароль в аргументе и возвращает
// - внутреннюю функцию, которая принимает введенную строку и возвращает булево значение true,
// - если введенная строка совпадает с паролем и false – если не совпадает.
// - Пример выполнения функции:
//   ```javascript
//   let checkPassword = makePassword("somePassword"); //задаем пороль
//   checkPassword("password"); // возвращает false
//   checkPassword("somePassword");
function makePassword (somePassword){
    return function checkPassword(userPassword) {
        if (somePassword == userPassword) {
            return true;
        };
        return false;
    };
};
  let check = makePassword('143');
console.log(check('1432'));



// TASK 9
// Напишите функцию на JavaScript, чтобы получить целые числа в диапазоне (x, y). 
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]
function range(x,y){
    let arr = [];
    for(x++; x<y; x++){
        arr.push(x);
    };
    return arr;
};
  console.log(range(2, 9));