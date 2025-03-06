class Url {
  constructor (url) {
    this.url = new URL(url);
  }

  getScheme () {
    return this.url.protocol.slice(0, -1);
  }

  getHostName () {
    return this.url.hostname;
  }

  getQueryParams () {
    return Object.fromEntries(this.url.searchParams);
  }

  getQueryParam (key, defaultValue = null) {
    return this.url.searchParams.get(key) ?? defaultValue;
  }

  equals (url) {
    return this.url.href === url.url.href;
  }
}

const url = new Url('http://yandex.ru:80?key=value&key2=value2');
console.log(url.getScheme()); // 'http'
console.log(url.getHostName()); // 'yandex.ru'
console.log(url.getQueryParams());
// {
//   key: 'value',
//   key2: 'value2',
// };
console.log(url.getQueryParam('key')); // 'value'
// второй;
// параметр - значение;
// по;
// умолчанию;
console.log(url.getQueryParam('key2', 'lala')); // 'value2'
console.log(url.getQueryParam('new', 'ehu')); // 'ehu'
console.log(url.getQueryParam('new')); // null
console.log(url.equals(new Url('http://yandex.ru:80?key=value&key2=value2'))); // true
console.log(url.equals(new Url('http://yandex.ru:80?key=value'))); // false
