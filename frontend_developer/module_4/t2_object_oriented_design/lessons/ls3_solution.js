const hasNumber = (string) => (string.search(/\d/) !== -1);

class PasswordValidator {
  constructor (param = {}) {
    const defaultParam = {
      minLength: 8,
      containNumbers: true,
    };

    this.param = { ...defaultParam, ...param };
  }

  validate (password) {
    const errors = {};

    if (password.length < this.param.minLength) {
      errors.minLength = 'too small';
    }

    if (this.param.containNumbers && !hasNumber(password)) {
      errors.containNumbers = 'should contain at least one number';
    }
    return errors;
  }
}

const validator = new PasswordValidator({ containNumbers: false });
console.log(validator.validate('qwertyui')); // {}
console.log(validator.validate('qwerty')); // { minLength: 'too small' }
