import React from "react";
import { Layout } from "../../components";

const code = `// hello-world.js
console.log("hello world");
`;

const output = `$ node hello-world.js
hello world
`;

const next = { name: "Values", slug: "values" };

const furtherReading = "https://nodejs.org/api/console.html#console_console";

export default () => (
  <Layout
    title="Hello World"
    code={code}
    output={output}
    next={next}
    furtherReading={furtherReading}
  >
    <p>
      The first program you should write is the traditional "hello world"
      program, which lets you get to grips with the execution environment as
      well as basic program output.
    </p>
    <p>
      The console provides a way to debug programs by outputting data at various
      points during a programs execution.
    </p>
    <p>
      If you run <code>console.log</code> when writing JavaScript in the
      browser, you would see the output in the browser's console. In Node.js, we
      will simply see the output in the terminal.
    </p>
  </Layout>
);
