function add(num1, num2) {
  return num1 + num2;
}

add(1, 2);

function subtract(num1, num2) {
  return num1 - num2;
}

subtract(1, 2);

function mutiply(num1, num2) {
  return num1 * num2;
}

mutiply(1, 2);

function divide(num1, num2) {
  return num1 / num2;
}

divide(1, 2);

let addResult = add(2, 3);
let divideResult = divide(1, 2);
let BResult = addResult + divideResult;

// 코드 러너: 컨트롤 + 옵션 + n

const calculator = {
  add: function (num1, num2) {
    return num1 + num2;
  },
  subtract: function (num1, num2) {
    return num1 - num2;
  },
  mutiply: function (num1, num2) {
    return num1 * num2;
  },
  divide: function (num1, num2) {
    return num1 / num2;
  },
};

let result = calculator.divide(1, 2) + calculator.add(1, 2);
console.log(result);
// 콘솔도 오프젝트이고 로그도 함수이다