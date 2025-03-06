const getParams = (querySrt: string): any => {
    return querySrt.split('&').reduce((acc: {}, param: string): {} => {
        const split: string[] = param.split('=')
        acc[split[0]] = split[1];
        return acc;
    }, {});
};

console.log(getParams('per=10&page=5'));
