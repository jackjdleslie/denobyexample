import React from "react";
import Link from "next/link";
import Head from "next/head";
import SyntaxHighlighter from "react-syntax-highlighter";
import { Header } from "..";
import styles from "./layout.css";

export default ({ title, code, output, next, children }) => (
  <div>
    <Head>
      <title>Node.js by Example - {title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className={styles.container}>
      <div className={styles.inner}>
        <Header subtitle={title} />
        <div className={styles.example}>
          <div className={styles.exampleText}>{children}</div>
          <div className={styles.exampleCode}>
            <SyntaxHighlighter language="javascript">{code}</SyntaxHighlighter>
          </div>
          <div className={styles.exampleOutput}>
            <SyntaxHighlighter language="bash">{output}</SyntaxHighlighter>
          </div>
          {next ? (
            <div className={styles.next}>
              <Link href={next.slug}>
                <a>{next.name} &rarr;</a>
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  </div>
);
