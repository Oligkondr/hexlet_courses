import HTMLElement from './HTMLElement.js';

class HTMLHrElement extends HTMLElement {
  toString () {
    const attrLine = this.stringifyAttributes();
    return `<hr${attrLine}>`;
  }
}

// const hr1 = new HTMLHrElement();
// console.log(hr1.toString()); // => <hr>
//
// const hr2 = new HTMLHrElement({ class: 'w-75', id: 'wop' });
// console.log(hr2.toString()); // => '<hr class="w-75" id="wop">';

const hr = new HTMLHrElement();
const expected = '<hr>';
console.log(hr.toString());

const hr2 = new HTMLHrElement({ class: 'w-75', id: 'wop' });
const expected2 = '<hr class="w-75" id="wop">';
console.log(hr2.toString());

// export default HTMLElement;
