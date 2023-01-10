// task 1. Вам дан массив числами [10, 20, 30, 40, 135, 2000].
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

// let arr = [10, 20, 30, 40, 135, 2000];

// for(i = 0; i < arr.length; i++){
// let num = String(arr[i]);
// let char = num[0];
// if (char == 1 || char == 2 || char == 5) {
//     console.log(num);
//   }
// }

// task 2 Вам дан массив с элементами [1, 2, 3, 4, 5, 6, 7, 8, 9]. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let newArr

// for(i = 0; i < arr.length; i++){
//     newArr = "-" + arr.join('-') + '-'
// }
// console.log(newArr);

// task 3 Вам дано число n=1000. Делите его на 2 столько раз, пока результат деления
// не станет меньше 50. Какое число получится?
// Посчитайте количество итераций,
// необходимых для этого (итерация - это проход цикла),
// и запишите его в переменную num.

// let n = 1000;
// let num = 0;
// while (n >= 50) {
//     n = n / 2;
//     num++;
// }
// console.log(n);
// console.log(num);

// task 4 Вам дан массив с числами [1, 2, 3, 7, 6, 9].
// Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).

// let arr = [1,2,3,7,6,9];
// let sum = 0;

// for(i = 0; i < arr.length; i++){
//     sum = (sum + arr[i]) / arr.length;

// }
// console.log(sum);

// task 5 Вам дан массив с числами [1, 2, 3, 4, 5].
// С помощью цикла найдите сумму квадратов элементов этого массива.

// let arr = [1,2,3,4,5];

// let newArr = [];

// let arr =  [1,2,3,4,5];
// let newArr = [];
// for(i = 0; i < arr.length; i++) {
//   let sqr = arr[i] * arr[i];
//   newArr.push(sqr);
// }
// console.log(newArr);
// for(j = 0, sum = 0; j < newArr.length; j++) {
//   sum += newArr[j];
// }
// console.log(sum);

// task 6 Вам дан массив с числами [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12].
// С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.

// let arr = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

// let newArr = []

// for(i = 0; i < arr.length; i++){
//     if(arr[i] > 0 && arr[i] < 10){
//         newArr = [...newArr, arr[i]]
//     }
// }
// console.log(newArr);

// task 7 Создайте переменную с пустым массивом,
// заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.

// let arr = [];
// for (i = 0; i < 10; i++) {
// 	arr.push(Math.round(Math.random() * 10) + 1);
// }
// console.log(arr);

// task 8 Создайте цикл, который суммирует числа, кратные 3 и 5 до 1000.

// let sum = 0;
// for (i = 0; i < 1000; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//        sum += i;
//     }
// }
// console.log(sum);

// task 19 Вам дан массив [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].
// Создайте цикл, который выводит нечетные числа, которые больше 10.

// let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
// let newArr = []

// for(i = 0; i < arr.length; i++){
//     if(arr[i] % 2 === 0){

//     }else if( arr[i] > 10){
//         newArr = [...newArr, arr[i]]
//     }
// }

// console.log(newArr);

// task 9 Вам дана строка 'jzvzszrzpz'. Измените каждую вторую букву на верхний регистр.

// const str = 'jzvzszrzpz';
// const strArr = str.split('');
// for (let i = 0; i < strArr.length; i++) {
//   strArr[i] = (i % 2) ? strArr[i].toUpperCase() : strArr[i].toLocaleLowerCase();
// }
// const newStr = strArr.join('');
// console.log(newStr);
