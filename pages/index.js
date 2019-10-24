import React from "react";
import Head from "next/head";
import Link from "next/link";

import { Header, Footer } from "../components";
import styles from "./index.css";

const Index = ({ examples = [] }) => (
  <div>
    <Head>
      <title>Node.js by Example</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className={styles.container}>
      <div className={styles.column}>
        <Header />
        <p>
          <a href="https://nodejs.org">Node.js</a> is an open source{" "}
          <a href="https://developer.mozilla.org/docs/Web/JavaScript">
            JavaScript
          </a>{" "}
          runtime environment allowing the execution of JavaScript programs
          outside of the browser.
        </p>
        <p>
          <i>Node.js by Example</i> is a hands-on introduction to JavaScript
          with Node.js using annotated example programs. Check out the{" "}
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
        <Footer>
          By <a href="https://jackleslie.dev">Jack Leslie</a> |{" "}
          <a href="https://github.com/jackleslie/nodejsbyexample">source</a> |{" "}
          <a href="https://github.com/jackleslie/nodejsbyexample#license">
            licence
          </a>
        </Footer>
      </div>
    </div>
  </div>
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
