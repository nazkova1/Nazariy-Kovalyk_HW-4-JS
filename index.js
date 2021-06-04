// 1. Факторіал числа
function factorize(factorial){
    let result = 1;
   while(factorial){
      if (factorial == 0 || factorial == 1){
         break;
      }
      factorial = factorial - 1;
      console.log(result);
   }
   return result;
 }
// 2. Створіть програму, що виводить на екран всі чотиризначні числа послідовності
//  1000 1003 1006 1009 1012 1015 … 9999
let a = 1000;
while (a < 10000) {
    a+=3;
} console.log(a);
// Не бачить 1ю Чому? 3.Створіть програму, що виводить на екран перші 55 елементів послідовності 1 3 5 7…
let a = 0;
let b = 1;
while (a <= 55) {
    a++;
    b +=2;
    console.log(b);
}
// 4.	Створіть програму, що виводить на екран всі
//  невід'ємні елементи послідовності 90 85 80 75 70 65 60 …

let a = 95;
while (a > 0) {
    a-=5;
    console.log(a);
}

// 5.	Створіть програму, що виводить на екран перші 20
//  елементів послідовності 2 4 8 16 32 64 128 …
let a = 0;
let b = 1;
while (a < 20) {
    a++;
    b *= 2;
    console.log(b);
}

// 6.Виведіть на екран всі числа в послідовності 
// 2a-1(крок зміни лічильника), де початкове значення a = 2 та які менше 10000.
let a = 2;
while (a < 10000) {
    a = 2 * a - 1;
    console.log(a)
}
// 7.	Виведіть на екран всі двозначні члени послідовності 
// 2a+200(крок зміни лічильника), де початкове значення змінної a = -166.
let a = -166;
while (a<100) {
    a = 2 * a + 200;
    if (a > -99 && a < 100) {
        console.log(a);
    }
}
// 8.	Написати програму що обчислює піднесення до степеня. 
// В 1й промпт вводиться число,а в 2й промпт степінь. Умови: 
// Степінь може бути додатня, від'ємна або 0. Обрахувати всі можливі варіанти. 
// Задачу бажано виконати використовуючи 1 цикл! 
// a^b = a*a b раз;
// a^-b= 1/a^b;
// a^0 = 1;
let number = 2;
let degree = -4;
let result = 1;
let secondResult = null;

if (degree < 0) {
    status = true;
}
if (status) {
    degree = -degree;
}
while (degree > 0) { 
    result *= number;

    if (status) {
        secondResult = 1 / result;
    }
    degree--;
}
console.log(secondResult ? secondResult : result);