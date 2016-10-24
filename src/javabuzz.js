
function FizzBuzz() {
}

FizzBuzz.prototype.play = function(number) {
  if (this._isDivisibleBy(15, number)) {
    return 'FizzBuzz';
  }
  if (this._isDivisibleBy(5, number)) {
    return 'Buzz';
  }
  if (this._isDivisibleBy(3, number)) {
    return 'Fizz';
  }
  return number;
}

FizzBuzz.prototype._isDivisibleBy = function(divisor, number) {
  return number % divisor === 0;
}
