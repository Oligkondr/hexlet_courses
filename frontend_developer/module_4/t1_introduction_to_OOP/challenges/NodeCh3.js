class NodeCh3 {
  constructor (key = null, left = null, right = null) {
    this.key = key;
    this.left = left;
    this.right = right;
  }

  getKey () {
    return this.key;
  }

  getLeft () {
    return this.left;
  }

  getRight () {
    return this.right;
  }

  search (key) {
    const currentKey = this.getKey();
    const currentLeft = this.getLeft();
    const currentRight = this.getRight();

    if (key === currentKey) {
      return this;
    } else if (key < currentKey && currentLeft) {
      return currentLeft.search(key);
    } else if (key > currentKey && currentRight) {
      return currentRight.search(key);
    }

    return null;
  }
}
