export default function Money7 (value, currency = 'usd') {
  this.value = value;
  this.currency = currency;
}

Money7.prototype.getValue = function getValue () {
  return this.value;
};

Money7.prototype.getCurrency = function () {
  return this.currency;
};

Money7.prototype.exchangeTo = function (currency) {
  const rate = {
    'usd': 1.2,
    'eur': 0.7,
  };

  const newValue = this.currency === currency
    ? this.value
    : this.value * rate[currency];

  return new Money7(newValue, currency);
};

Money7.prototype.add = function (money) {
  const newMoney = money.exchangeTo(this.currency);
  const newValue = this.value + newMoney.getValue();

  return new Money7(newValue, this.currency);
};

Money7.prototype.format = function () {
  return this.value.toLocaleString(undefined, { style: 'currency', currency: `${this.currency}` });
};

const money1 = new Money7(100);
console.log(money1.getValue());
// console.log(money1.getCurrency());
// console.log(money1.exchangeTo('eur').getValue());
