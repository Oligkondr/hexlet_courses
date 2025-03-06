import ParseError from './ParseError.js';

const parseJson = (json) => {
  try {
    return JSON.parse(json);
  } catch (error) {
    throw new ParseError('Invalid JSON string');
  }
};

console.log(parseJson('{ key": "value" }'));
