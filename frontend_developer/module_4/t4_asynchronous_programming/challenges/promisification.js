const promisify = (func) => (...args) => new Promise((resolve, reject) => {
  const customCallback = (err, result) => {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  };
  args.push(customCallback);
  func.call(this, ...args);
});
