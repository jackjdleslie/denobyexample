import React from "react";
import { Layout } from "../components";

const code = `// hello-world.js
var x = 12;
var y = 2;
console.log(x + y);
`;

const output = `$ node hello-world.js
14
`;

export default () => <Layout title="Hello World" code={code} output={output} />;
