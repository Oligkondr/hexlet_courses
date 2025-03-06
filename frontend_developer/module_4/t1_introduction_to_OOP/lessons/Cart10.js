class Cart10 {
  constructor () {
    this.items = [];
  }

  addItem (item, count) {
    this.items.push({ item, count });
  }

  getItems () {
    return this.items;
  }

  getCost () {
    return this.getItems().reduce((acc, item) => {
      return acc + item.item.price * item.count;
    }, 0);
  }

  getCount () {
    return this.getItems().reduce((acc, item) => {
      return acc + item.count;
    }, 0);
  }
}

const cart = new Cart10();

cart.addItem({ name: 'car', price: 3 }, 5);
cart.addItem({ name: 'house', price: 10 }, 2);

// console.log(cart.getItems().length); // 2
console.log(cart.getCost()); // 35
// console.log(cart.getItems());
console.log(cart.getCount());
