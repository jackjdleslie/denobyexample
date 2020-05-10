import React from 'react';
import { Layout } from '../../components';

const code = `// variables.js

// we define a variable str with a string typed value
var str = "road";

// we can use the typeof keyword to get the type of the value in a variable
console.log(typeof str);

// if we don't define a variable, the value will be undefined
var x;

// we can still use typeof on an undefined variable
console.log(typeof x);

// variables defined with var are mutable, so we can change the value whenever
str = "route";
x = "sixty-six";

// we can print out the values of variables too
console.log(str, x);

// if the variables aren't typed but they are mutable, we can also change the type of value!
x = 66;

// we can print out a mix of strings and numbers
console.log(str, x);
`;

const output = `$ node variables.js
string
undefined
route sixty-six
route 66
`;

const furtherReading = 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/up%20%26%20going/ch2.md#values--types';

export default () => (
  <Layout
    title="Variables"
    code={code}
    output={output}
    furtherReading={furtherReading}
  >
    <p>
      In JavaScript, variables are simply destinations for typed values. This
      means that there is no explicit type definition needed when defining a
      variable. As you can see below, this means that a variable can hold any
      type of value.
    </p>
    <p>
      The keyword
      {' '}
      <code>var</code>
      {' '}
      declares one or more variables, and if you
      don't explicitly assign a variable a value then its value is
      {' '}
      <code>undefined</code>
      .
    </p>
  </Layout>
);
