import React from "react";
import Head from "next/head";
import Link from "next/link";

import { Layout } from "../components";

const code = `// created-by.js
console.log(process.env.NAME);
console.log(process.env.GITHUB_USERNAME);
`;

const output = `$ node created-by.js
Jack Leslie
@jackleslie
`;

const next = { name: "Hello World", slug: "examples/hello-world" };

const Index = ({ examples = [] }) => (
  <Layout code={code} output={output} next={next}>
    <p>
      <a href="https://nodejs.org">Node.js</a> is an open source{" "}
      <a href="https://developer.mozilla.org/docs/Web/JavaScript">JavaScript</a>{" "}
      runtime environment allowing the execution of JavaScript programs outside
      of the browser.
    </p>
    <p>
      <i>Node.js by Example</i> is a hands-on introduction to JavaScript with
      Node.js using annotated example programs. Check out the{" "}
      <Link href="examples/hello-world">
        <a>first example</a>
      </Link>{" "}
      or browse the full list below.
    </p>
    <ul>
      {examples.map(example => (
        <li key={example.name}>
          <Link href={example.slug}>
            <a>{example.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async () => {
  const examples = process.env.examples
    .filter(example => example.endsWith(".js"))
    .map(example => {
      const short = example.substring(0, example.length - 3);
      const name = short
        .replace("-", " ")
        .replace(/(^|\s)\S/g, l => l.toUpperCase());
      return {
        name,
        slug: `examples/${short}`
      };
    });
  return { examples };
};

export default Index;
