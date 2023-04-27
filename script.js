// ZADANie 1

let i = 0;
while(i<50){
    console.log(i);
    ++i;

};

let u=0

while(u<38){
    ++u;
};
while(u<=38 && u>=8){
    console.log(u);
    --u;
};

//zadanie 2

o = 89;

while(o<=89 && o>=11){
    console.log(o);
    console.log("<br/>");
    --o;
}

//Zadanie 3
let summ = 0;

for (let i = 0; i <= 100; i++) {
  summ += i;
}

console.log(summ);

//zadanie 4
for (let i = 1; i <= 5; i++) {
    let summa = 0;
    
    for (let j = 1; j <= i; j++) {
      summa += j;
    }
    
    console.log(`Сумма чисел в числе ${i} равна ${summa}`);
  }

  //zadanie 5
let h = 8;

while (h <= 56) {
  if (h % 2 === 0) {
    console.log(h);
  }
  h++;
}

for (let j = 8; j <= 56; j++) {
  if (j % 2 === 0) {
    console.log(j);
  }
}

//zadanie 6

for (let q = 2; q <= 10; q++) {
    for (let w = 1; w <= 10; w++) {
      console.log(`${q} * ${w} = ${q * w}`);
    }
  }
  
//zadanie 7


let n = 1000;
let num = 0;

while (n >= 50) {
  n /= 2;
  num++;
}

console.log(n);
console.log(num); 

//zadanie 8

let suma = 0; 
let count = 0; 
let input = prompt('Введите число:'); 

while (input !== '' && input !== '0') {
  let num = Number(input); 

  if (!isNaN(num)) { 
    suma += num; 
    count++; 
  } else {
    alert('Ошибка! Введите число.'); 
  }

  input = prompt('Введите число:'); 
}

if (count > 0) { 
  let average = suma / count; 
  console.log(`Общая сумма: ${suma}`);
  console.log(`Среднее арифметическое: ${average}`);
} else {
  console.log('Вы не ввели ни одного числа.');
}

//zadanie 9
let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
let numsArr = str.split(' '); 
let min = Number.MAX_SAFE_INTEGER; 
let max = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < numsArr.length; i++) {
  let num = Number(numsArr[i]);

  if (num > max) { 
    max = num;
  }

  if (num < min) { 
    min = num;
  }
}

console.log(`Минимальное число: ${min}`);
console.log(`Максимальное число: ${max}`);

// zadanie 10

let k = 123;
let massiv = [];
let sum = 0;

while (k > 0) { 
  let delen = k % 10; 
  massiv.push(delen); 
  sum += delen; 
  k = Math.floor(k / 10); 
}

console.log('Цифры числа: ' + massiv.reverse().join(' ')); 
console.log('Количество цифр в числе: ' + massiv.length); 
console.log('Сумма цифр числа: ' + sum); 
