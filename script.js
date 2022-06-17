"use strict";

/*Напишите расширения метода прототипа:
1) Два класса, First и Second, Second наследует от First .
2) В First есть метод hello - он печатает в консоль "Привет я метод родителя!".
3) Нужно написать в Second метод hello, чтоб он сначала вызывал метод hello из 
First, а потом сразу печатал в консоль "А я наследуемый метод!"*/

class First {
  constructor() {
    // this.text = text;
  }
  hello() {
    console.log(`Привет я метод родителя!`);
  }
}

class Second extends First {
  constructor(hello) {
    super(hello);
  }
}

const second = new Second("Привет я метод родителя!");
second.hello();
second.hello = function () {
  console.log(`А я наследуемый метод `);
};
second.hello();
