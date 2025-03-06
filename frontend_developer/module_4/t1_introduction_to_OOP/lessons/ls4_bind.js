const myBind1 = (context, fn) => (...arg) => fn.apply(context, arg);

function myBind2 (context, fn) {
  return function (...arg) {
    return fn.apply(context, arg);
  };
}
