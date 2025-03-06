const checkAccess = (prop, protectedProps) => {
  if (protectedProps.includes(prop)) {
    throw new Error(`Access to ${prop} is restricted`);
  }
};

const protect = (obj, protectedProps) => new Proxy(obj, {
  set (target, p, value) {
    checkAccess(p, protectedProps);
    target[p] = value;
    return true;
  },
  get (target, p) {
    if (!protectedProps.includes(p)) {
      return target[p];
    }
    throw new Error(`Access to ${p} is restricted`);
  },
});

const user = {
  name: 'John',
  age: 25,
  password: 'secret',
};

const protectedProps = ['password'];

// const protectedUser = protect(user, protectedProps);
// console.log(protectedUser.name); // John
// console.log(protectedUser.age); // 25
// console.log(protectedUser.password); // Error: Access to 'password' is restricted

// protectedUser.name = 'Jane'; // установит значение 'Jane' в свойство 'name'
// protectedUser.password = 'newPassword'; // Error: Access to 'password' is restricted
