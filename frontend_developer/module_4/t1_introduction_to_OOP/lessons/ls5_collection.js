const each1 = (obj, func) => {
  for (const name in obj) {
    func.call(obj[name]);
  }
};

const each2 = (objs, func) => objs.forEach((obj) => func.call(obj));
