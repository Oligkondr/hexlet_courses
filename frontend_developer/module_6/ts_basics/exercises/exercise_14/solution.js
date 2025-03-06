var map = function (numbers, callback) {
    var result = [];
    numbers.forEach(function (number, i) {
        result.push(callback(number, i));
    });
    return result;
};
console.log(map([3, 9], function (n) { return n - 3; }));
