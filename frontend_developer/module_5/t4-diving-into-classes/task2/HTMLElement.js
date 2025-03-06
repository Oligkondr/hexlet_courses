export default class HTMLElement {
  constructor(attributes = {}) {
    this.attributes = attributes;
  }

  stringifyAttributes() {
    let resultStr = '';
    for (const i in this.attributes) {
      resultStr += ` ${i}="${this.attributes[i]}"`
    }
    return resultStr;
  }
}
