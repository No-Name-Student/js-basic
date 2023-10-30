//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {return(n==~~n)}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
  let result = [];
  for (i=0;i<21;i+=2)
  {
    result.push(i);
  }
  return(result);
}
//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
  let result = 0;
  for (i=0; i<=n; i++)
  {
    result+=i;
  }
  return (result);
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
  if (n>0)
  {
    result=n+recSumTo(n-1);
    return (result);
  }
  else{
    return (0);
  }
}
console.log(recSumTo(3));
//Напишите функцию, считающую факториал заданного числа
function factorial(n) { 
	let result = 1; 
	for (i=1; i<=n; i++) {
		result*=i;
	} 
	return (result);
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    for (i=0; Math.pow(2, i)<=n; i++)
    {
        if (Math.pow(2, i)==n)
        {
            return (true);
        }
    }
    return(false);
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    if (n==1 || n==2)
    {
        return (1);
    }
    return (fibonacci(n-1)+fibonacci(n-2))
}

/** Напишите функцию, которая принимает начальное значение и функцию операции
 * и возвращает функцию - выполняющую эту операцию.
 * Если функция операции (operatorFn) не задана - по умолчанию всегда
 * возвращается начальное значение (initialValue)
 * @param initialValue
 * @param operatorFn - (storedValue, newValue) => {operation}
 * @example
 * const sumFn =  getOperationFn(10, (a,b) => a + b);
 * console.log(sumFn(5)) - 15
 * console.log(sumFn(3)) - 18
 */
function getOperationFn(initialValue, operatorFn) {
    if (operatorFn==null)
    {
        operatorFn = (a,b) => a;
    }
    return function (secondValue)
    {
     result = operatorFn(initialValue, secondValue);
     initialValue=result;
     return result;
    }
}

/**
 * Напишите функцию создания генератора арифметической последовательности.
 * При ее вызове, она возвращает новую функцию генератор - generator().
 * Каждый вызов функции генератора возвращает следующий элемент последовательности.
 * Если начальное значение не передано, то оно равно 0.
 * Если шаг не указан, то по дефолту он равен 1.
 * Генераторов можно создать сколько угодно - они все независимые.
 *
 * @param {number} start - число с которого начинается последовательность
 * @param {number} step  - число шаг последовательности
 * @example
 * const generator = sequence(5, 2);
 * console.log(generator()); // 5
 * console.log(generator()); // 7
 * console.log(generator()); // 9
 */
function sequence(start, step) {
    if (start==null)
    {
        start=0;
    }
    if (step==null)
    {
        step=1;
    }
    return function () {
        result = start;
        start+=step;
        return result;
    }
}

/**
 * Напишите функцию deepEqual, которая принимает два значения
 * и возвращает true только в том случае, если они имеют одинаковое значение
 * или являются объектами с одинаковыми свойствами,
 * значения которых также равны при сравнении с рекурсивным вызовом deepEqual.
 * Учитывать специфичные объекты(такие как Date, RegExp итп) не обязательно
 *
 * @param {object} firstObject - первый объект
 * @param {object} secondObject - второй объект
 * @returns {boolean} - true если объекты равны(по содержанию) иначе false
 * @example
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 33], text: 'text'}) // true
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 3], text: 'text2'}) // false
 */
function deepEqual(object1, object2) {
  if (Number.isNaN(object1) && Number.isNaN(object2)) {
    return true;
  }
  if (!(object1 !== null && typeof object1 === "object") || !(object2 !== null && typeof object2 === "object"){
    return false;
  }
  const keys = Object.keys({ ...object1, ...object2 });
  for (const key of keys) {
    if (!deepEqual(object1[key], object2[key])) {
      return false;
    }
  }
  return true;
}

module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};
