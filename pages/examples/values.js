import React from "react";
import { Layout } from "../../components";

const code = `// values.js

// string: using addition (+) with strings concatenates them
console.log("node" + "js");

// number: you can print numbers directly to console without explicit type coercion
console.log("1 + 1 =", 1+1);
console.log("7.0 / 3.0 =", 7.0/3.0);

// boolean: these work as expected
console.log(true && false);
console.log(true || false);
console.log(!true);
`;

const output = `$ node values.js
nodejs
1 + 1 = 2
7.0 / 3.0 = 2.3333333333333335
false
true
false
`;

export default () => (
  <Layout title="Values" code={code} output={output}>
    <p>
      JavaScript does not have typed <i>variables</i> - instead it has typed{" "}
      <i>values</i> such as: <code>string</code>, <code>number</code>,{" "}
      <code>boolean</code>, <code>object</code>, <code>null</code> and{" "}
      <code>undefined</code>.
    </p>
    <p>
      We will play about with <code>string</code>, <code>number</code> and{" "}
      <code>boolean</code> here and will go into more details about{" "}
      <code>object</code>, <code>null</code> and <code>undefined</code> later.
    </p>
  </Layout>
);
