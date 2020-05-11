import React from 'react';
import Link from 'next/link';

import { Layout } from '../components';

const code = `// created-by.js
console.log(process.env.NAME);
console.log(process.env.URL);
`;

const output = `$ deno run created-by.js
Jack Leslie
jackleslie.dev
`;

const next = { name: 'Hello World', slug: 'examples/hello-world' };

const Index = ({ examples = [] }) => (
  <Layout code={code} output={output} next={next}>
    <p>
      <a href="https://deno.land">Deno</a>
      {' '}
      is an open source
      {' '}
      <a href="https://developer.mozilla.org/docs/Web/JavaScript">JavaScript</a>
      {' '}
      runtime environment allowing the execution of JavaScript programs outside
      of the browser.
    </p>
    <p>
      <i>Deno by Example</i>
      {' '}
      is a hands-on introduction to
      Deno using annotated example programs. Check out the
      {' '}
      <Link href="examples/hello-world">
        <a>first example</a>
      </Link>
      {' '}
      or browse the full list below.
    </p>
    <ul>
      {examples.map((example) => (
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
    .filter((example) => example.endsWith('.mdx'))
    .map((example) => {
      const short = example.substring(0, example.length - 4);
      const name = short
        .replace('-', ' ');
      return {
        name,
        slug: `examples/${short}`,
      };
    });
  return { examples };
};

export default Index;
