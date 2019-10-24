import React from "react";
import Head from "next/head";
import Link from "next/link";
import fetch from "isomorphic-fetch";

import { Header } from "../components";
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
          <Link href="hello-world">
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
        <p className={styles.footer}>
          By <a href="https://jackleslie.dev">Jack Leslie</a> |{" "}
          <a href="https://github.com/jackleslie/nodejsbyexample">source</a> |{" "}
          <a href="https://github.com/jackleslie/nodejsbyexample#license">
            licence
          </a>
        </p>
      </div>
    </div>
  </div>
);

Index.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/examples");
  const examples = await res.json();
  return { examples };
};

export default Index;
