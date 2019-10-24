import React from "react";
import Link from "next/link";
import Head from "next/head";
import SyntaxHighlighter from "react-syntax-highlighter";
import { Header } from "..";
import styles from "./layout.css";

export default ({ title, code, output }) => (
  <div>
    <Head>
      <title>Node.js by Example - {title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className={styles.container}>
      <div className={styles.inner}>
        <Header subtitle={title} />
        <div className={styles.example}>
          <div className={styles.exampleText}>
            <p>
              My dad once told me, laugh and the world laughs with you, Cry, and
              I'll give you something to cry about you little bastard! Is this
              my espresso machine? Wh-what is-h-how did you get my espresso
              machine? I gave it a cold? I gave it a virus. A computer virus.
            </p>
            <p>
              They're using our own satellites against us. And the clock is
              ticking. You really think you can fly that thing? Life finds a
              way. They're using our own satellites against us. And the clock is
              ticking. Just my luck, no ice. Hey, take a look at the earthlings.
              Goodbye!
            </p>
          </div>
          <div className={styles.exampleCode}>
            <SyntaxHighlighter language="javascript">{code}</SyntaxHighlighter>
          </div>
          <div className={styles.exampleOutput}>
            <SyntaxHighlighter language="bash">{output}</SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  </div>
);
