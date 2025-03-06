var filter = function (numbers, pred) {
    return numbers.filter(function (number) { return pred(number); });
};
var numbers = [1, -5, 2, 3, 4, 133];
console.log(filter(numbers, function (n) { return n > 3; }));
