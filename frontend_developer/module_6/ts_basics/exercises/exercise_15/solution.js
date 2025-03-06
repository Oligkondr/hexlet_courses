var forEach = function (arr, callback) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var elem = arr_1[_i];
        callback(elem);
    }
};
forEach([1, 2, 3], function (n) { return console.log(n); });
var result = [];
forEach([1, 2, 3], function (n) { return result.push(n); });
console.log(result);
