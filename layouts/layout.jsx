import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { Header } from '../components';
import styles from './layout.module.css';

export default ({
  title, code, output, furtherReading, next,
}) => ({ children }) => (
  <div>
    <Head>
      <title>
        Deno by Example
        {title ? ` - ${title}` : ''}
      </title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className={styles.container}>
      <div className={styles.inner}>
        <Header subtitle={title || null} />
        <div className={styles.example}>
          <div className={styles.exampleText}>{children}</div>
          <div className={styles.exampleCode}>
            <SyntaxHighlighter language="javascript">{code}</SyntaxHighlighter>
          </div>
          <div className={styles.exampleOutput}>
            <SyntaxHighlighter language="bash">{output}</SyntaxHighlighter>
          </div>
          <div className={styles.extra}>
            {furtherReading ? (
              <a id="further-reading" href={furtherReading} target="_blank" rel="noopener noreferrer">
                Further reading
              </a>
            ) : null}
            {next ? (
              <Link href={next.slug}>
                <a id="next">
                  {next.name}
                  {' '}
                  &rarr;
                </a>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  </div>
);
