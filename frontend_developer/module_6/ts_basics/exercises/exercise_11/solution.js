var getParams = function (querySrt) {
    return querySrt.split('&').reduce(function (acc, param) {
        var split = param.split('=');
        acc[split[0]] = split[1];
        return acc;
    }, {});
};
console.log(getParams('per=10&page=5'));
