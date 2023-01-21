// Домашнее задание
// Выписать в комментариях. Вам необходимо найти все переменные,
// функции, аргументы и параметры.
// Запишите имена в соответсвующие пункты
// Переменные: years, guests, myDog  
// Функции: dogYears, makeTea 
// Встроенные функции:
// Аргументы:
// Параметры:
// function dogYears(dogname, age){
//     let years = age * 2;
//     console.log(dogName + ' is ' + years + ' years old');
// }
// let myDog = 'Rex';
// dogYears(myDog, 4);

// function makeTea (cups, tea){
//     console.log('Breawing ' + cups + ' cups of' + tea);
// }
// let guests = 2;
// makeTea(guests, 'Earl Grey');

// function secret(){
//     console.log('The secret of life is 28');
// }
// secret();
  


// Дана строка 'JS'. Сделайте из нее строку 'js'.
let text = 'JS';
console.log(text.toLowerCase());

// Дана строка 'я люблю JS!'. Вырежите из нее слово 
// 'люблю' и слово 'javascript' тремя разными способами 
// (через substr, substring, slice).
let wordAnalysis = 'я люблю JS!';
console.log(wordAnalysis.substr(2,5));
console.log(wordAnalysis.substr(8,2));
console.log(wordAnalysis.substring(2,7));
console.log(wordAnalysis.substring(8,10));
console.log(wordAnalysis.slice(2,7));
console.log(wordAnalysis.slice(8,10));


// Дана строка 'я люблю JS!'. Найдите позицию 
// подстроки 'люблю'.
let line = 'я люблю JS!';
console.log(line.search('люблю'));

// Дана переменная txt, в которой хранится какой-либо текст. 
// Реализуйте обрезание длинного текста по следующему 
// принципу: если количество символов этого текста больше 
// заданного в переменной n, то в переменную result запишем 
// первые n символов строки txt и добавим в конец 
// троеточие '...'. В противном случае в переменную 
// result запишем содержимое переменной txt.
let txt = 'Регулярные выражения - это шаблоны, используемые для сопоставления последовательностей символов в строках.';
let n = 6;
if(n < txt.length){
    console.log(result = txt.charAt(0) + '...')
  }else{
    console.log(result = txt)
  }
  

// Для решения задач данного блока вам понадобятся следующие 
// методы: replace.
// Дана строка 'Я-люблю-JS!'. 
// Замените все  '-' на '!' с помощью глобального 
// поиска и замены.
let twoLine = 'Я-люблю-JS!';
console.log(twoLine.replace(/-/g,'!'));

// Дана строка 'я люблю JS'. С помощью метода split 
// запишите каждое слово этой строки в отдельный элемент 
// массива.
let thirdLine = 'я люблю JS';
console.log(thirdLine.split("\ "));

// Дана строка 'привет мир'. С помощью метода split 
// запишите каждый символ этой строки в отдельный элемент 
// массива.
let fourthLine = 'привет мир';
console.log(fourthLine.split(""));